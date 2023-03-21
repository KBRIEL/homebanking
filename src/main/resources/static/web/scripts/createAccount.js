
 const { createApp } = Vue

  Vue.createApp({
    data() {
      return {
        message: 'REGISTER',
        checkedFirstN: '',
        checkedLastN: '',
        clients:[],
        checkedEmail:'',
        checkedPassword:'',
        dataUrl:"",
        dUrl:"",
        lista: [1,2,3],
        estilo:{
                 padding: 12,
                 'margin-left': 4,
                 'margin-right': 4,
                 'background-color':'green',
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
                color:'black',
              'border-radius':42 +'px',
              'background-color':'#707070',
                margin:23,
                width: 100+'px',
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



                lalaBtn(){

                   window.location.href='http://localhost:8080/web/accounts.html'

                },

                logBtn(){

               this.dUrl ="email="+this.checkedEmail+"&password="+this.checkedPassword
               var mail= this.checkedEmail;

                axios.post('/api/login',this.dUrl)
                          .then(response => {
                          localStorage.setItem("userEmail",mail)
                          window.location.href='http://localhost:8080/web/accounts.html'

                          })

                },



           registerBtn(){

           if (this.checkedEmail.includes("@")){
                    var email= this.checkedEmail;
               this.dataUrl ="firstName="+this.checkedFirstN+"&lastName="+this.checkedLastN+"&email="+this.checkedEmail+"&password="+this.checkedPassword

                     this.dUrl ="email="+this.checkedEmail+"&password="+this.checkedPassword

               axios.post('/api/clients',this.dataUrl)
                          .then(response => {
                          alert(response.data)

                            axios.post('/api/login',this.dUrl)
                                  .then(response => {
                                      localStorage.setItem("userEmail",email)
                                       window.location.href='http://localhost:8080/web/accounts.html'
                                       })

                         } )
                       .catch((exception)=>{ alert(" the datas was not correct ")})
           }else{
                alert( 'wrong email');
           };

               this.checkedFirstN='';
               this.checkedLastN='';
               this.checkedEmail='';
               this.checkedPassword='';
            }

    },


    created() {


              },

                template: `
                  <div :style="estilo" >

                  <div  :style='st_bg'>  <h2 >Create Account</h2>  </div>
                   <h4> firstName  </h4>
                   <input type="text"   v-model="checkedFirstN"/>
                   <h4> lastName</h4>
                   <input type="text"  v-model="checkedLastN"/>
                    <h4> Email  </h4>
                    <input type="email"   v-model="checkedEmail"/>
                    <h4> Password</h4>
                    <input type="password"  v-model="checkedPassword"/>

                    <div :style='st_bg'>
                        <input  :style='bx' type="submit" value="Create"  @click='registerBtn()'   />
                        <input  :style='bx' type="submit" value="Cancel"  @click='lalaBtn()'   />
                    </div >

                   </div>

                  </div>`,
                  style:`
                  .lala{
                  background-color: 'green',
                  color:'green',
                  'border-radius':19px
                  }`

     }).mount('#createAcc')
