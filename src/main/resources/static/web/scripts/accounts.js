Vue.createApp({
    data() {
        return {
            client: {
                    number : "1",
                    accounts:[],
                    transactions: []
                    },
            accounts: {},
            img:"./img/cards.png",

//------------Styles----------------------------------

            cajas:{
                    display:'flex',
                    'flex-wrap':'wrap',
                   'justify-content':'space-around',

            },

            acc:{

                   color:'red',
            },
             styleCredit:{'background':'linear-gradient(180deg, #F9DFF3  ,#404C5A)',
                          'border-radius':12 +'px',
                           margin:13 +'px',
                           display:'flex',
                           'justify-content':'center',
                           width: 300+'px',
                            height: 150+'px',
                            height: 100+'px',
                           //  cursor:'pointer',
                           'box-shadow': '5px 5px rgba(0, 0, 0, 0.4)',
                        },

             imgStyle:{

                         'background-image': 'url(./img/cards.png)',
                         'background-size' : 'contain',
                         'justify-content':'center',
                         width:500+'px',
                         height:200+'px',
                         'border-radius':12 +'px',
                         cursor:'pointer',

             },

            styleTrans:{

                        'background':'linear-gradient(135deg,#A2BCD7,#404C5A)',
                        'border-radius':12 +'px',
                         margin:13 +'px',
                        display:'grid',
                        'justify-content':'center',
                        'border-radius':12 +'px',
                        'border-width': 0.1+'px',
                        'border-style': 'solid',
                        'border-color':'#979C9C',
                        width: 300+'px',
                         height: 150+'px',
                         cursor:'pointer',
                         'box-shadow': '5px 5px rgba(0, 0, 0, 0.4)',
                        },
            estilo:{
                      padding: 12,
                      'margin-left': 4,
                      'margin-right': 4,
                      'background':'linear-gradient(45deg,#A2BCD7,#404C5A)',
                      'border-radius':12 +'px',
                       display:'block',
                       'justify-content':'center',
                       'box-shadow': '5px 5px rgba(0, 0, 0, 0.4)',
            },
            divLogout:{
                        display:'flex',
                        width: 100+'%',
                        'justify-content':'space-between',
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

          btnAccount:{},

          advertencia:{
                          color:'red',
                       },

          cardloan:{
                          display:'flex',
                          'justify-content':'space-around',
          },

          btnCreateAccount:{
                            display:'flex',
                            'justify-content':'center',
          },

          wellcome:{
                            'margin-left': 3+'%',
          },

        }
    },
 //-------------------------------------------------------

     methods:{

            hoverAcc(){
            this.acc={
                      color:'black',
                      transform: 'scale( 1.1)',
                      }

            },
             hover(){
                this.imgStyle={
                           'background-image': 'url(./img/cards.png)',
                          'background-size' : 'contain',
                           'justify-content':'center',
                           width:500+'px',
                           height:200+'px',
                           'border-radius':12 +'px',
                           cursor:'pointer',
                           transform: 'scale( 1.1)',
                }
             },
             leave(){
             this.imgStyle={
                             'background-image': 'url(./img/cards.png)',
                             'background-size' : 'contain',
                             'justify-content':'center',
                             width:500+'px',
                             height:200+'px',
                             'border-radius':12 +'px',
                             cursor:'pointer',
                             }
             },
             getCards(){
               window.location.href='http://localhost:8080/web/cards.html';
             },

             crearCuenta(){
                axios.post("http://localhost:8080/api/clients/current/accounts")
                     .then(response => console.log(response))
                        setTimeout(()=>{
                            window.location.reload()
                        }, 500);
             },

             logout(){
                axios.post('/api/logout')
                    .then(response => console.log('signed out!'));
                    window.location.href='http://localhost:8080/index.html';
             },


             getAccount(id){
                localStorage.setItem("userAccount",id);
                window.location.href='http://localhost:8080/web/account.html';
             },

             dateFn(date){
                return date.slice(0,10);
             },

             f(){
               if(this.client.accounts.length >2){
                  this.btnAccount={display:'none'}
               }else{
                   this.btnAccount={
                       color:'#FFFEFB',
                       'border-radius':42 +'px',
                        'background-color':'#3C4759',
                        margin:23,
                        width: 130+'px',
                        height: 30+'px',
                        'justify-content':'right',
                        cursor:'pointer',
                        'box-shadow': '5px 5px rgba(0, 0, 0, 0.2)',
                        }
                   }
            },

    },


//-----------------------------------------------------------------------
   created() {



        var urlEmail="http://localhost:8080/api/clients/current"
        axios.get(urlEmail)
            .then(response=> {
                this.client = response.data;
                this.accounts = response.data.accounts
                this.f()
        })

        axios.get("http://localhost:8080/api/accounts")
                    .then(response=> {
                        this.allCcounts = response.data
        })

        const urlParams = new URLSearchParams(window.location.search);
        const idAccount = urlParams.get('id');
        const url ="http://localhost:8080/api/accounts/" + idAccount;
        axios.get(url)
              .then(response=> {
                  this.mensaje = response.data
       })

    },

//-------------------------------------------------------


    template: `
               <div :style="estilo">

                   <div  :style= 'divLogout'>
                       <h1 :style='wellcome'>Wellcome {{this.client.firstName}}</h1>
                       <button :style= 'btnLogout' @click="logout()">Logout</button>
                   </div>
                   <div :style='cardloan'>
                       <div>
                           <div >
                                <h2 :style='wellcome'>Look At Yours Cards</h2>
                                <div>
                                <div  @mouseover='hover()' @mouseleave='leave()':style="imgStyle" @click='getCards()'></div>
                                </div>
                           </div>
                       </div>

                       <div >
                           <h2>Loans </h2>
                           <h4 :style='advertencia' v-if='client.loans.length <1'>No Loans </h4>
                           <div :style="cajas">
                               <div :style="styleCredit"  v-for = "loan in client.loans" >
                                   <div>
                                       <h4 >{{loan.name}}</h4>
                                       <p >Cuotas:    {{loan.payments}}        /         Total Amount $ {{loan.amount}}</p>
                                   </div>
                               </div>
                           </div>
                       </div>

                   </div>

                   <div  style="width: 100%">
                       <div :style="btnCreateAccount"><h2>Accounts</h2>
                           <button :style= 'btnAccount' @click="crearCuenta()">Create</button></div>
                           <div :style="cajas">
                           <div :style="acc" :style="styleTrans"  v-for = "acc in client.accounts" >
                                <div @mouseover='hoverAcc()'@click="getAccount(acc.account_id)">
                                    <h5 >{{acc.number}}</h5>
                                    <p > Balance: $ {{acc.balance}}</p>
                                    <p>My Transactions</p>
                                </div>
                           </div>
                       </div>
                   </div>
               </div>`,


}).mount('#accounts')


