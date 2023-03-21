Vue.createApp({
    data() {
        return {
            message: 'Mis Cuentas',
            client: {
                     number : "1",
                     transactions: []
                     },
            accounts: {},
            account: {},
        //    mensaje:{},
            cuenta: 'Transacciones',

//------------Styles------------------------------
            divFlex:{
            display:'flex',
            margin:0,
            },
            colorGreen:{
                color:'#32B71D',
                'margin-left' :4+'px',
                'font-weight':900,
               // 'webkit-text-fill-color': ' #0ED317',
                'text-shadow': '1px 1px 1px #000',
                'webkit-text-stroke':1+"'px' 'black'",
                'border-color':'black',
            },

            colorRed:{
                 'margin-left' :8+'px',
                'font-weight':900,
                 color:'#A22F06',
                 'text-shadow': '1px 1px 1px #000',
            },
            cajas:{
                   display:'flex',
                   'flex-wrap':'wrap',
                   'justify-content':'left',
                    width: 100+'%',
                    'font-size': 16+'px',
            },


            name:{
                     'font-size':22+'px',
                      color:'black',
                      'margin-left':4+'%'
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


            styleTrans:{
                        hight:'auto',
                        'background':'linear-gradient(180deg,#A2BCD7,#263B49 )',
                        color:'black',
                        'border-radius':12 +'px',
                        margin:13 +'px',
                         display:'grid',
                        'justify-content':'center',
                        width: 235+'px',
                         height: 190+'px',
                         cursor:'pointer',
                         'box-shadow': '5px 5px rgba(0, 0, 0, 0.4)',
            },
            styleTransRed:{
                        hight:'auto',
                        'background':'linear-gradient(180deg,#CCCFCE, #9A9D9D)',
                        color:'black',
                        'border-radius':12 +'px',
                        margin:13 +'px',
                         display:'grid',
                        'justify-content':'center',
                        width: 235+'px',
                         height: 190+'px',
                         cursor:'pointer',
                         'box-shadow': '5px 5px rgba(0, 0, 0, 0.4)',
            },
            styleTransGreen:{
                        hight:'auto',
                        'background':'linear-gradient(180deg,#C0EFD0, #0D3C1D)',
                        color:'black',
                        'border-radius':12 +'px',
                        margin:13 +'px',
                         display:'grid',
                        'justify-content':'center',
                        width: 235+'px',
                         height: 190+'px',
                         cursor:'pointer',
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
        }
    },

//----------------------------------------------------------------------------------------
     methods:{

                        transfer(){
                            console.log('trnasfer!!!');
                            localStorage.setItem('myAccount', this.account.number);
                            window.location.href='http://localhost:8080/web/transfers.html'

                        },

                        logout(){
                            axios.post('/api/logout').then(response => console.log('signed out!'));
                            window.location.href='http://localhost:8080/index.html'
                        },

                        dateFn(date){
                            return date.slice(0,10);
                        },

                        back(){
                            window.location.href='http://localhost:8080/web/accounts.html';
                         },

     },

//------------------------------------------------------------------------------------------
   created() {


      var urlEmail="http://localhost:8080/api/clients/current"
          axios.get(urlEmail)
               .then(response=> {
                     this.client = response.data;
                    })

      var accUrl="http://localhost:8080/api/accounts/"+localStorage.getItem("userAccount")
          axios.get(accUrl)
               .then(response=> {
                      this.account = response.data
                    })


        const urlParams = new URLSearchParams(window.location.search);
        const idAccount = urlParams.get('id');
        const url ="http://localhost:8080/api/accounts/" + idAccount;
        axios.get(url)
             .then(response=> {
                  this.mensaje = response.data
                    })




    },

//-------------------------------------------------------------------------------------

    template: `
                    <div :style="estilo">
                        <div  :style= 'divLogout'>
                           <button :style= 'btnLogout' @click="transfer()">Transfer</button>
                           <button :style= 'btnLogout' @click="logout()">Logout</button>
                           <button :style= 'btnBack' @click="back()"> <- </button>
                        </div>
                        <h2 :style='name'>Name : {{this.client.lastName}} {{this.client.firstName}}</h2>


                                    <div  style="width: 100%">
                                        <div :style="name">
                                            <h4>Number: {{account.number}}</h4>
                                            <h4>CreationDate: {{dateFn(account.creationDate)}}</h4>
                                            <h4>Balance: $ {{account.balance}}</h4>
                                        </div>

                                        <div >
                                             <h2 :style='name'>Transactions</h2>
                                             <div :style="cajas">
                                                 <h4 :style='advertencia' v-if='account.transactions.length <1'>No Transactions </h4>
                                                 <div :style="styleTransRed"  v-for = "trans in account.transactions" >
                                                     <div v-if = "'DEBITO' == trans.type" >
                                                          <p>Type: {{trans.type}}</p>
                                                          <p >Creation:    {{dateFn(trans.date)}}</p>
                                                          <div :style= 'divFlex'> <p>Amount: $ </p><p :style='colorRed'>   -{{trans.amount}}</p></div>

                                                          <p >Motive: {{trans.motive}}</p>
                                                     </div>
                                                     <div v-if = "'CREDITO' == trans.type" >
                                                          <p>Type: {{trans.type}}</p>
                                                          <p >Creation:    {{dateFn(trans.date)}}</p>
                                                          <div :style= 'divFlex'> <p>Amount: $ </p><p :style='colorGreen'> {{trans.amount}}</p></div>
                                                          <p >Motive: {{trans.motive}}</p>
                                                     </div>
                                                 </div>

                                             </div>
                                        </div>
                                    </div>

                    </div>
`,


}).mount('#acc')


