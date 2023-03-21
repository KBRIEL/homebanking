
 const { createApp } = Vue

  Vue.createApp({
    data() {
      return {
        message: 'LOGIN',
        password: '',
        email: '',
        clients:[],
        checkedEmail:'melba@mindhub.com',
        checkedPassword:'melbapass',
        dataUrl:"",
        lista: [1,2,3],
        estilo:{
                 padding: 12,
                                  'margin-left': 4,
                                  'margin-right': 4,
                                  'margin-top': 114+'px',
                                  'background':'linear-gradient(45deg,#A2BCD7,#404C5A)',
                                  'border-radius':12 +'px',
                                   display:'grid',
                                   'justify-content':'center',


                },
        st_bg:{
                color:'#EEEEEE',
                display:'flex',
                'justify-content':'center',
                },
        bx:{
        color:'#FFFEFB',
                                         'border-radius':42 +'px',
                                         'background-color':'#3C4759',
                                           margin:23,
                                           width: 130+'px',
                                            height: 30+'px',
                                             'justify-content':'right',
        },
         estiloo:{

                         'background-color':'blue',
                            'border-radius':12 +'px',
                            display:'grid',
                            'justify-content':'center',

                             width: 150+'px',
                                             height: 100+'px',

                        },
           'bx:hover':{
           cursor:'pointer'
           },

           registerLk:{
                       'text-decoration-color':'none',
                      color:'#EDF9A0 ',
                      'font-size':14,
                      'justify-content':'flex-end',

                      },
            bxx:{
                           color:'black',
                         'border-radius':42 +'px',
                         'background-color':'#707070',

                           width:50+'px',
                            height: 10+'px',
                             'justify-content':'right',
                   },

      }
    },
methods:{



                cancelBtn(){

                  window.location.href='http://localhost:8080/index.html'

                },



           loginBtn(){

           if (this.checkedEmail.includes("@")){

               this.dataUrl ="email="+this.checkedEmail+"&password="+this.checkedPassword
               var email= this.checkedEmail;

                axios.post('/api/login',this.dataUrl)
                          .then(response => {
                          localStorage.setItem("userEmail",email)
                          window.location.href='http://localhost:8080/web/accounts.html'

                          })
                          .catch((exception)=>{ alert(" your Email or password was not correct ")})
           }else{
                alert( 'wrong email');
           };

               this.checkedEmail='';
               this.checkedPassword='';
            }

    },


    created() {


              },

                template: `
                  <div :style="estilo" >


                  <div  :style='st_bg'>  <h2 >Login</h2>  </div>
                    <h4> Email  </h4>
                    <input type="email"   v-model="checkedEmail"/>
                    <h4> Password</h4>
                    <input type="password"  v-model="checkedPassword"/>
                    <a :style="registerLk" type="butoon" href="http://localhost:8080/register.html" >your not register? press here</a>
                    <div :style='st_bg'>
                        <input  :style='bx' type="submit" value="Sing In"  @click='loginBtn()'   />
                        <input  :style='bx' type="submit" value="Cancel"  @click='cancelBtn()'   />
                    </div >

                   </div>

                  </div>`,
                  style:`
                  .lala{
                  background-color: 'green',
                  color:'green',
                  'border-radius':19px
                  }`

     }).mount('#login')
