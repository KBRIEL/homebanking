
 const { createApp } = Vue

  Vue.createApp({
    data() {
      return {
        message: 'LOGIN',
        password: '',
        email: '',
        clients:[],
        checkedEmail:'',
        checkedPassword:'',
        dataUrl:"",
        lista: [1,2,3],
        estilo:{
                 padding: 12,
                 'margin-left': 4,
                 'margin-right': 4,
                // 'background-color':'#3C4759',
                 'background':'linear-gradient(45deg,#A2BCD7,#404C5A)',
              //   animation:'cambiar' +10+'s' +'ease-in-out'+ 'infinite',
                    'border-radius':12 +'px',
                    display:'grid',
                    'justify-content':'center',

/*
#A2BCD7
#3C4759
#9097A7
#404C5A
#FFFEFB




                },

         @keyframes cambiar(){
            0+'%'{'background-position':0 50+'%'},
            50+'%'{'background-position':100+'%' 50+'%'},
            100+'%'{'background-position':0 50+'%'},*/
                 },
        st_bg:{
                color:'#FFFEFB',
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
            bxx:{
                           color:'black',
                         'border-radius':42 +'px',
                      //   'background-color':'#707070',

                           width:50+'px',
                            height: 10+'px',
                             'justify-content':'right',
                   },

      }
    },
methods:{



                registerBtn(){

                    window.location.href='http://localhost:8080/register.html'

                },



           loginBtn(){

            window.location.href='http://localhost:8080/login.html'},

    },


    created() {


              },

                template: `
                  <div :style="estilo" >


                  <div  :style='st_bg'>  <h2 >Square Bank</h2>  </div>

                    <div :style='st_bg'>
                        <div>
                             <input  :style='bx' type="submit" value="Login"  @click='loginBtn()'   />
                        </div>
                        <div>
                            <input  :style='bx' type="submit" value="Register"  @click='registerBtn()'   />
                         </div>

                    </div >

                   </div>

                  </div>`,
                  style:`
                  .lala{
                  background-color: 'green',
                  color:'green',
                  'border-radius':19px
                  }`

     }).mount('#ix')




/*

var root = document.getElementById("root")
var div1 =document.createElement("div")
var div11 =document.createElement("div")
var div2 =document.createElement("div")
var div21 =document.createElement("div")
var btn_1 = document.createElement("button")

btn_1.innerHTML="Accept"

var lb1 = document.createElement("label")
var lb2 = document.createElement("label")

var input1 = document.createElement("input")
var input2 = document.createElement("input")

lb2.innerHTML="Password"
lb1.innerHTML="Email"



div1.appendChild(div11)
div11.appendChild(lb1)
div1.appendChild(input1)

div2.appendChild(div21)
div21.appendChild(lb2)
div2.appendChild(input2)

btn_1.addEventListener('click',login);

 function login (){lb1.innerHTML=input1.value}




root.appendChild(div1)
root.appendChild(div2)
root.appendChild(btn_1)

*/