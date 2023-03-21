
 const { createApp } = Vue

  Vue.createApp({
    data() {
      return {
        message: 'volvio la alegria!!!!!!!!',
        prueba: 'por que no andas en js',
        segundo: 'fin',
        clients:[],
        cuarto:{},

      }
    },

    created() {

                axios.get("http://localhost:8080/api/clients")
                    .then(response=> {
                        this.clients = response.data;

                })
              },

    template: `
    <div>
    <b-row class= class="mt-5">
        <b-col col="12" md="4">
            <b-card v-for="(client) in clients[0].cards">
               <h3>{{client.color}}</h3>
               <h4>{{client.number}}</h4>
               <h3>{{client.type}}</h3>
        </b-card>

        </b-col>
    </-row>

    </div>`

     }).mount('#loan')


/*





            axios.get("http://localhost:8080/api/clients/1/")
                        .then(response=> {

                        this.client = response.data;
                        this.accounts = response.data.accounts

                })       },
  }).mount('#loan')
*/


/*
document.body.onload = addElement;

function addElement () {
  // crea un nuevo div
  // y añade contenido
  var newDiv = document.createElement("h1");
  var newContent = document.createTextNode("Hola!¿Qué tal?");
  newDiv.appendChild(newContent); //añade texto al div creado.

  // añade el elemento creado y su contenido al DOM
  var currentDiv = document.getElementById("div1");
  document.
  document.body.insertBefore(newDiv, currentDiv);

}
const div = document.createElement("div");
div.textContent = "Esto es un div insertado con JS.";

const app = document.createElement("div"); // <div></div>
app.id = "prueba";       // <div id="app"></div>
app.appendChild(div)
*/