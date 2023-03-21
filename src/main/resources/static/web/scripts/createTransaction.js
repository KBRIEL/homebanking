
 const { createApp } = Vue

  Vue.createApp({
    data() {
      return {
        limite:'',
        my :'',
        other:'',
        out: {number:'',},
        client:{},
        accounts:[],
        account:{},
        dataUrl:"",
        dUrl:"fff",
        amount:0,
        description:'',
        accountNumber:localStorage.getItem('myAccount'),
//------------Style-----------------------------------------------------------------
        border:{
        'border-radius':2+'%',
        },

        modal:{
               display:'none',
        },

        btnModal:{
                display:'flex',
                'justify-content':'center',
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
                 'z-index':100,
        },

        st_bg:{
                color:'#EEEEEE',
                display:'flex',
                'justify-content':'center',
                'margin-top': 5+'%',

        },

        bx:{
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

         inputStyle:{
                   display:'flex',
                   width:70+'%',
                   height:150+'%',
                   'margin-left':15+'%' ,
                   'font-size':14+'px',
                   'justify-content':'center',
                   'border-radius':2+'px',

                   cursor:'pointer',
         },

      }
    },

//---------------------------------------------------------------------------------
methods:{

                cancelBtn(){

                   window.location.href='http://localhost:8080/web/accounts.html'

                },

                cancelTransfer(){
                  this.modal={
                    display:'none',
                  }
                },





                transBtn(){
                        var ee= this.out
                    if( this.out != "" && this.description != ""&& this.amount >0){
                        if(this.amount > this.account.balance){
                        alert('does not have enough amount')
                         window.location.href='http://localhost:8080/web/transfers.html'
                        }else{

                            if(this.my == 'Other'){
                            this.out=this.other
                            }
                                 this.dUrl ="description="+this.description+"&amount="+this.amount+'.0'+"&originAccount="+localStorage.getItem('myAccount')+"&destinationAccount="+this.out
                                                 axios.post('http://localhost:8080/api/transactions',this.dUrl)
                                                      .then(response => {
                                                             window.location.href='http://localhost:8080/web/account.html'
                                                          })
                                                      .catch((exception)=>{ alert("The transaction could not be completed")})
                        }

                    }else{
                          alert('the data is wrong')

                          }
                    this.modal={
                                 display:'none',
                               }

               },

               btnDisplay(){
                        this.modal={
                            'background':'linear-gradient(45deg,#169B9A,#033635 )',
                            'border-radius':12 +'px',
                            display:'block',
                            'justify-content': 'center',
                            position: 'fixed',
                            top:50+'%',
                            left:50+'%',
                            transform:'translate(-50%, -50%)',
                            padding:1+'%',
                            'box-shadow': '5px 5px rgba(0, 0, 0, 0.4)',
                            'z-index':98,
                        }

               },

    },




    created() {
             var urlEmail="http://localhost:8080/api/clients/current"
                    axios.get(urlEmail)
                        .then(response=> {
                            this.client = response.data;
                            this.accounts = response.data.accounts


                        })

              var accUrl="http://localhost:8080/api/accounts/"+localStorage.getItem("userAccount")
                       axios.get(accUrl)
                            .then(response=> {
                                   this.account = response.data
                                 })

              },

                template: `
                          <div :style="estilo" >

                              <div  :style='st_bg'>
                                 <h2 >Transfer</h2>
                              </div>
                              <p :style='inputStyle'> Account: {{this.accountNumber}} </p>
                               <p :style='inputStyle'> Amount Available: $ {{this.account.balance}} </p>
                              <h4 :style='inputStyle'> Out Account </h4>
                              <select :style='inputStyle' name="" id="" v-model="my">
                                  <option value="My Account">My Account</option>
                                  <option value="Other">Other</option>
                              </select>
                              <h4 v-if="this.my =='My Account'" :style='inputStyle' > My Accounts </h4>
                              <select v-if="this.my =='My Account'":style='inputStyle'  name="" id="" v-model="out">
                                    <option v-for = "acc in client.accounts"  >{{acc.number}}</option>
                              </select>

                               <h4 v-if="this.my =='Other' "  :style='inputStyle'> Out Account </h4>
                               <input v-if="this.my =='Other'"  :style='inputStyle' type="Text" v-model="other"  />

                               <transition>
                                   <div :style='modal'  v-if'showModal'>
                                       <h3>Are you sure you want to continue with the transaction?</h3>
                                       <div :style='btnModal'>
                                           <button :style='bx' @click='transBtn()'>Accept</button>
                                           <button :style='bx' @click=' cancelTransfer()'>Cancel</button>
                                       </div>
                                   </div>
                               </transition>


                               <h4 :style='inputStyle'> Amount</h4>
                               <input  :style='inputStyle' type="number"  v-model.number="amount" />
                               <h4 :style='inputStyle'> Description </h4>
                               <input  :style='inputStyle' type="Textarea"  v-model="description" />

                               <div :style='st_bg'>
                                   <input  :style='bx' type="submit" value="transfer"  @click='btnDisplay()'   />
                                   <input  :style='bx' type="submit" value="Cancel"  @click='cancelBtn()'   />
                               </div >
                          </div>`,


     }).mount('#createTransaction')
