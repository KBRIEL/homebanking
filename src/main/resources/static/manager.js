Vue.createApp({
    data() {
        return {
            message: 'Hello Vue!',
            clients: [],
            client: {},
            urlclienteSeleccionado: "",
            clienteSeleccionado: {},
            contenidoJson: [],

            firstName: "",
            lastName: "",
            email: "",
            firstNameEdit: "",
            lastNameEdit: "",
            emailEdit: "",
        }
    },

    created() {
        axios.get('http://localhost:8080/clients')
            .then(datos => {
                this.clients = datos.data._embedded.clients
                // this.clients = datos.data._embedded.clients
                this.contenidoJson = datos.data

                console.log(this.clients)

            })
    },
    methods: {
        agregarATabla() {
            this.client = {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
            }
            // console.log(this.client)
            if (this.firstName != "" && this.lastName != "" && this.email != "" && this.email.includes("@" && ".")) {
                axios.post('http://localhost:8080/clients', this.client)
            }

        },
        capturarCliente(cliente) {
            this.clienteSeleccionado = cliente;
            this.urlclienteSeleccionado = cliente._links.client.href;
        },
        editarCliente(url) {
            this.firstNameEdit = document.querySelector("#firstNameEdit").value
            this.lastNameEdit = document.querySelector("#lastNameEdit").value
            this.emailEdit = document.querySelector("#emailEdit").value

            this.client = {
                firstName: this.firstNameEdit,
                lastName: this.lastNameEdit,
                email: this.emailEdit,
            }
            axios.patch(url, this.client)
                .then(location.reload())
        },
        removerCliente(url) {
            axios.delete(url)
                .then(location.reload())
        }
    },
    computed: {},
}).mount('#app')