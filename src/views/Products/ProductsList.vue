<template>
    <div id="Produtos">

        <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
            <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
            </symbol>
            <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
            </symbol>
            <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </symbol>
        </svg>

        <div v-if="showAlertSuccess" class="alert alert-success d-flex align-items-center" role="alert">
            <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
            <div>
                Produto cadastrado com sucesso!
            </div>
        </div>

        <div v-if="showAlertDanger" class="alert alert-danger d-flex align-items-center" role="alert">
            <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
            <div>
                Ops, erro ao cadastrar produto!
            </div>
        </div>

        <h3>Cadastrar Produto</h3>
        <hr />

        <div id="formulario">

            <div class="col-sm-12">
                <div class="row">

                    <div class="col-sm-3 mb-3">
                        <label for="tipo" class="form-label">{{ form.tipo.title }}</label>
                        <input v-model="form.tipo.value" type="text" class="form-control" id="tipo">
                    </div>

                    <div class="col-sm-3 mb-3">
                        <label for="marca" class="form-label">{{ form.marca.title }}</label>
                        <input v-model="form.marca.value" type="text" class="form-control" id="marca">
                    </div>

                    <div class="col-sm-4 mb-3">
                        <label for="nome" class="form-label">{{ form.nome.title }}</label>
                        <input v-model="form.nome.value" type="text" class="form-control" id="nome">
                    </div>

                    <div class="col-sm-2 mb-3">
                        <label for="tamanho" class="form-label">{{ form.tamanho.title }}</label>
                        <input v-model="form.tamanho.value" type="number" class="form-control" id="tamanho">
                    </div>

                    <div class="col-sm-4 mb-3">
                        <label for="genero" class="form-label">{{ form.genero.title }}</label>
                        <input v-model="form.genero.value" type="text" class="form-control" id="genero">
                    </div>

                    <div class="col-sm-4 mb-3">
                        <label for="sku" class="form-label">{{ form.sku.title }}</label>
                        <input v-model="form.sku.value" type="text" class="form-control" id="sku">
                    </div>

                    <div class="col-sm-4 mb-3">
                        <label for="quantidade" class="form-label">{{ form.quantidade.title }}</label>
                        <input v-model="form.quantidade.value" type="number" class="form-control" id="quantidade">
                    </div>

                    <div class="col-sm-12">
                        <button @click="addProduct()" class="btn btn-personalize w-100" :disabled="form.button.disable">
                            <div v-if="form.button.disable" class="spinner-grow spinner-grow-sm text-light" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                            <i v-else class="fa fa-save"></i>
                            <span class="text-button">{{ form.button.title }}</span>
                        </button>
                    </div>
                
                </div>
            </div>

        </div>

        <h3 class="pt-5">Lista de Produtos</h3>
        <hr />

        <div id="tabela">

            <div v-if="loadTable" class="col-sm-12 text-center">
                <div class="spinner-grow text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
            
            <table v-else class="table table-striped table-hover text-center">
                <thead>
                    <tr>
                        <th scope="col">Tipo</th>
                        <th scope="col">Marca</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Tamanho</th>
                        <th scope="col">Gênero</th>
                        <th scope="col">SKU</th>
                        <th scope="col">Quantidade</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in products" :key="product.id">
                        <td>{{ product.tipo }}</td>
                        <td>{{ product.marca }}</td>
                        <td>{{ product.nome }}</td>
                        <td>{{ product.tamanho }}</td>
                        <td>{{ product.genero }}</td>
                        <td>{{ product.sku }}</td>
                        <td>{{ product.quantidade }}</td>
                        <td>
                            <button @click="$router.push('/produto/' + product.id)" class="btn btn-info btn-view">
                                <i class="fa fa-eye"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>

    </div>
</template>

<script>
import urlApi from "@/router/urlApi";
import axios from 'axios';

export default {
    name: 'Produtos',
    components: {

    },
    data() {
        return {
            showAlertSuccess: false,
            showAlertDanger: false,
            loadTable: false,
            products: [],
            form: {
                tipo: { title: 'Tipo', value: '' },
                marca: { title: 'Marca', value: '' },
                nome: { title: 'Nome', value: '' },
                tamanho: { title: 'Tamanho', value: 0 },
                genero: { title: 'Gênero', value: '' },
                sku: { title: 'SKU', value: '' },
                quantidade: { title: 'Quantidade', value: 0 },
                button: { title: 'Cadastrar', disable: false }
            }
        }
    },

    created() {
        this.getProducts();
    },

    methods: {
        
        getProducts() {

            this.products = [];

            this.loadTable = true;

            axios.get(urlApi + 'products')
            .then(response => {
                this.products = response.data;
                this.loadTable = false;
            })
            .catch(function (error) {
                console.log(error)
                this.loadTable = false;
            })
        },

        addProduct() {
            var data = {
                tipo: this.form.tipo.value,
                marca: this.form.marca.value,
                nome: this.form.nome.value,
                tamanho: this.form.tamanho.value,
                genero: this.form.genero.value,
                sku: this.form.sku.value,
                quantidade: this.form.quantidade.value
            };

            var self = this;
            
            self.form.button.disable = true;
            self.loadTable = true;
            
            axios.post(urlApi + 'products', data)
            .then(response => {
                console.log(response)
                self.cleanInputs();

                self.showAlertSuccess = true;

                setTimeout(function() {
                    self.showAlertSuccess = false;
                }, 3000);

                self.getProducts();
                self.loadTable = false;
                self.form.button.disable = false;
            })
            .catch(function (error) {
                console.log(error)
                self.showAlertDanger = true;

                setTimeout(function() {
                    self.showAlertDanger = false;
                }, 3000);

                self.loadTable = false;
                self.form.button.disable = false;
            })
        },

        cleanInputs() {
            this.form.tipo.value = '';
            this.form.marca.value = '';
            this.form.nome.value = '';
            this.form.tamanho.value = 0
            this.form.genero.value = '';
            this.form.sku.value = '';
            this.form.quantidade.value = 0;
        },

    }

}
</script>

<style>
    .btn.btn-personalize {
        background: #9b6afa;
        color: white;
    }

    #tabela .btn {
        padding: 0;
    }

    .btn.btn-info.btn-view {
        background: #28d9ec;
        padding: 2px 10px !important;
        line-height: 1;
        border-radius: 10px;
        font-size: 16px;
        color: #444;
    }

    .btn.btn-personalize:hover {
        background: #7e58cc;
        color: white;
    }

    .spinner-grow.text-primary {
        background: #7e58cc;
    }

    .alert.alert-success, .alert.alert-danger {
        position: fixed;
        right: 4%;
        top: 12%;
        box-shadow: 0 0 1em #ddd;
    }

    .text-button {
        margin-left: 1% !important;
    }
</style>