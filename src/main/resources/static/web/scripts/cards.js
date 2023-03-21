Vue.createApp({
    data() {
        return {
            client: {
                     number : "1",
                     accounts:[],
                     transactions: [],
                     cards:[],
                     },
            accounts: {},
            img:"./img/cards.png",

//-----------Styles-----------------------------------

            cajas:{
                    display:'flex',
                    'flex-wrap':'wrap',
                   'justify-content':'space-around',
                   width: 100+'%',
            },
            styleCardS:{
                        'background':'linear-gradient(45deg,#808386 ,#DCE6EE )',
                         color:'black',
                         'border-radius':12 +'px',
                         margin:13 +'px',
                         display:'grid',
                       //  'justify-content':'center',
                         width: 300+'px',
                         height: 150+'px',
                         padding:22+'px',
                         'box-shadow': '5px 5px rgba(0, 0, 0, 0.4)',
            },
           styleCardG:{
                         'background':'linear-gradient(45deg,#424504,#F3F4DE )',
                         color:'black',
                         'border-radius':12 +'px',
                         margin:13 +'px',
                         display:'grid',
                        // 'justify-content':'center',
                         width: 300+'px',
                         height: 150+'px',
                         padding:22+'px',
                         'box-shadow': '5px 5px rgba(0, 0, 0, 0.4)',
            },

           styleCardT:{
                        'background':'linear-gradient(45deg,black,#263B49 )',
                         color:'white',
                        'border-radius':12 +'px',
                        margin:13 +'px',
                        display:'grid',
                     //   'justify-content':'center',
                        width: 300+'px',
                        height: 150+'px',
                        padding:22+'px',
                        'box-shadow': '5px 5px rgba(0, 0, 0, 0.4)',
            },

           styleCredit:{'background-color':' #DA9CAD',
                          'border-radius':12 +'px',
                           margin:13 +'px',
                           display:'grid',
                           'justify-content':'center',
                           width: 300+'px',
                            height: 150+'px',
                            height: 150+'px',
                            'box-shadow': '5px 5px rgba(0, 0, 0, 0.4)',

           },

           advertencia:{
                          color:'red',
           },

           estilo:{
                        padding: 12,
                        'margin-left': 4,
                        'margin-right': 4,
                        'background':'linear-gradient(45deg,#A2BCD7,#404C5A)',
                        'border-radius':12 +'px',
                        display:'grid',
                        'justify-content':'center',
                        'font.size': 12,
                        'box-shadow': '5px 5px rgba(0, 0, 0, 0.4)',
          },

          divLogout:{
                         display:'flex',
                         width: 100+'%',
                         'justify-content':'right',
                                                },
          btnLogout:{
                         color:'#FFFEFB',
                         'border-radius':42 +'px',
                         'background-color':'#3C4759',
                          margin:23,
                          width: 130+'px',
                          height: 30+'px',
                          'justify-content':'right',
                          cursor:'pointer',
                          'box-shadow': '5px 5px rgba(0, 0, 0, 0.2)',
          },

          btnBack:{
                         color:'#FFFEFB',
                         'border-radius':42 +'px',
                         'background-color':'#3C4759',
                         margin:23,
                         width: 70+'px',
                         height: 30+'px',
                         'justify-content':'right',
                          cursor:'pointer',
                          'box-shadow': '5px 5px rgba(0, 0, 0, 0.2)',
          },

          linea:{
                          'background-color':'#94222F',
                           width: 300+'px',
                          height: 2+'px',
          },

          textPad:{
                        display:'flex',
                        'margin-left':4+'%',
          },


        }
    },

 //-------------------------------------------------------------------------------------

     methods:{
                  back(){
                           window.location.href='http://localhost:8080/web/accounts.html';
                           },

                  crearCard(){
                                  window.location.href='http://localhost:8080/web/createCard.html';
                            },

                  logout(){
                             axios.post('/api/logout').then(response => console.log('signed out!!!'));
                             window.location.href='http://localhost:8080/index.html';

                             },


            },
//-------------------------------------------------------------------------------------------------
   created() {


        var urlEmail="http://localhost:8080/api/clients/current"
        axios.get(urlEmail)
            .then(response=> {
                this.client = response.data;
            })




    },

  //-----------------------------------------------------------------------------------------------------------
    template: `
                <div :style="estilo">
                        <div  :style= 'divLogout'>
                           <button :style= 'btnLogout' @click="logout()">Logout</button>
                           <button :style= 'btnBack' @click="back()"> <- </button>
                        </div>
                        <h2  :style='textPad'>Name :  {{this.client.firstName}}</h2

                        <div>
                             <div :style='textPad'><h3 >My Cards</h3><button :style= 'btnLogout' @click="crearCard()">Create</button></div>
                             <h4 :style='advertencia' v-if='client.cards.length <1'>No Cards Loaded</h4>
                             <div :style="cajas">
                                 <div v-for = "card in client.cards" >
                                     <div v-if = "'SILVER' == card.color" :style="styleCardS">
                                         <h4 >{{card.cardHolder}}</h4>
                                         <div v-if = "'CREDIT' == card.type":style='linea'></div>
                                         <p >{{card.type}}    {{card.color}}</p>
                                         <p >N° {{card.number}}</p>
                                     </div>
                                     <div v-else-if = "'GOLD'== card.color" :style="styleCardG">
                                          <h4 >{{card.cardHolder}}</h4>
                                          <div v-if = "'CREDIT' == card.type":style='linea'></div>
                                          <p >{{card.type}}    {{card.color}}</p>
                                          <p >N° {{card.number}}</p>
                                     </div>
                                     <div v-else = 'TITANIUM == card.color' :style="styleCardT">
                                          <h4 >{{card.cardHolder}}</h4>
                                          <div v-if = "'CREDIT' == card.type":style='linea'></div>
                                          <p >{{card.type}}    {{card.color}}</p>
                                          <p >N° {{card.number}}</p>
                                     </div>
                                 </div>
                             </div>

                        </div>
                </div>
               `

}).mount('#cards')


