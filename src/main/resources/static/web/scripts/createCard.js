
 const { createApp } = Vue

  Vue.createApp({
    data() {
      return {
        limite:'',
        type :'',
        color: '',
        dUrl:"",

//-------------style---------------------------------------------
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

        st_bg:{
                color:'#EEEEEE',
                display:'flex',
                'justify-content':'center',
                'margin-top': 10+'%',
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
                  'font-size':16+'px',
                  'justify-content':'center',
                  cursor:'pointer',
        },

  }
},

//----------------------------------------------------------------------------
methods:{

      cancelBtn(){
          window.location.href='http://localhost:8080/web/accounts.html'
      },

      createCardBtn(){

         if(this.type != "" && this.Color != ""){
              this.dUrl ="color="+this.color+"&type="+this.type
               this.limite= " you have reached the limit of "+ this.type+ " CARDS";
              axios.post('/api/clients/current/cards',this.dUrl)
                   .then(response => {
                        window.location.href='http://localhost:8080/web/cards.html'})
                  .catch((exception)=>{ alert(this.limite)})
           }
               this.color='';
               this.type='';
            },

    },

//---------------------------------------------------------------
    created() {


              },
//-------------------------------------------------------------------------------
   template: `
                             <div :style="estilo" >
                                  <div  :style='st_bg'>
                                      <h2 >Create Card</h2>
                                  </div>
                                  <h4 :style='inputStyle' > Type </h4>
                                  <select :style='inputStyle' name="" id="" v-model="type">
                                       <option value="CREDIT">CREDIT</option>
                                       <option value="DEBIT">DEBIT</option>
                                  </select>
                                  <h4 :style='inputStyle'> Color </h4>
                                  <select :style='inputStyle' name="" id="" v-model="color">
                                        <option value="SILVER">SYLVER</option>
                                        <option value="GOLD">GOLD</option>
                                        <option value="TiTANIUM">TITANIUM</option>
                                  </select>
                                  <div :style='st_bg'>
                                         <input  :style='bx' type="submit" value="Create"  @click='createCardBtn()'   />
                                         <input  :style='bx' type="submit" value="Cancel"  @click='cancelBtn()'   />
                                  </div >
                             </div>`,


     }).mount('#createCard')
