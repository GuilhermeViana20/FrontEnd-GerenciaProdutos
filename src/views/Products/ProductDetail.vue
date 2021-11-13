<template>
    <div id="Produto">
        
        <div class="container my-3">

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

            <div v-if="showAlertSucesso" class="alert alert-success d-flex align-items-center" role="alert">
                <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
                <div>
                    {{ mensagem }}
                </div>
            </div>

            <div v-if="showAlertErro" class="alert alert-danger d-flex align-items-center" role="alert">
                <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
                <div>
                    {{ mensagem }}
                </div>
            </div>
            
            <h3>Atualizar Produto</h3>
            <hr />

            <div id="formulario">

                <div v-if="loadForm" class="col-sm-12 text-center">
                    <div class="spinner-grow text-primary" role="status">
                        <span class="visually-hidden">Carregando...</span>
                    </div>
                </div>

                <div v-else class="col-sm-12">
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
                            <label for="quantidade_atual" class="form-label">{{ form.quantidade_atual.title }}</label>
                            <input v-model="form.quantidade_atual.value" type="number" class="form-control" id="quantidade_atual">
                        </div>

                        <div class="col-sm-12">
                            <button @click="upgradeProduct()" class="btn btn-personalize w-100" :disabled="form.button.disable">
                                <div v-if="form.button.disable" class="spinner-grow spinner-grow-sm text-light" role="status">
                                    <span class="visually-hidden">Carregando...</span>
                                </div>
                                <i v-else class="fa fa-save"></i>
                                <span class="text-button">{{ form.button.title }}</span>
                            </button>
                        </div>
                    
                    </div>
                </div>

            </div>

        </div>

    </div>
</template>

<script>
import urlApi from "@/router/urlApi";
import axios from 'axios';

export default {
    name: 'Produto',
    components: {

    },
    data() {
        return {
            showAlertSucesso: false,
            showAlertErro: false,
            loadForm: false,
            product: [],
            mensagem: '',
            form: {
                id: { value: 0 },
                tipo: { title: 'Tipo', value: '' },
                marca: { title: 'Marca', value: '' },
                nome: { title: 'Nome', value: '' },
                tamanho: { title: 'Tamanho', value: 0 },
                genero: { title: 'Gênero', value: '' },
                sku: { title: 'SKU', value: '' },
                quantidade_atual: { title: 'Quantidade', value: 0 },
                button: { title: 'Atualizar', disable: false }
            }
        }
    },

    created() {
        this.loadForm = true;
        var rota = this.$router.options.history.state.current;

        this.getProduct(rota);
    },

    methods: {
        getProduct(rota)
        {
            var currentRota = rota.replace('/produto/', '', this.$router.options.history.state.current);

            axios.get(urlApi + 'products/' + currentRota)
            .then(response => {
                this.product = response.data;

                this.form.id.value = response.data.id
                this.form.tipo.value = response.data.tipo
                this.form.marca.value = response.data.marca
                this.form.nome.value = response.data.nome
                this.form.tamanho.value = response.data.tamanho
                this.form.genero.value = response.data.genero
                this.form.sku.value = response.data.sku
                this.form.quantidade_atual.value = response.data.quantidade_atual

                this.loadForm = false;
            })
            .catch(function (error) {
                console.log(error)
                this.loadForm = false;
            })
        },

        upgradeProduct()
        {
            var data = {
                id: this.form.id.value,
                tipo: this.form.tipo.value,
                marca: this.form.marca.value,
                nome: this.form.nome.value,
                tamanho: this.form.tamanho.value,
                genero: this.form.genero.value,
                sku: this.form.sku.value,
                quantidade_atual: this.form.quantidade_atual.value
            };
 
            this.form.button.disable = true;
            this.loadTable = true;
            
            axios.post(urlApi + 'products/update/' + data.id, data)
            .then(response => {
                this.cleanInputs();

                this.showAlertSucesso = true;

                var self = this;
                setTimeout(function() {
                    self.showAlertSucesso = false;
                }, 3000);

                this.loadTable = false;
                this.form.button.disable = false;
                this.mensagem = response.data.mensagem;

                var rota = this.$router.options.history.state.current;
                this.getProduct(rota);
            })
            .catch(function (error) {
                this.showAlertErro = true;

                setTimeout(function() {
                    this.showAlertErro = false;
                }, 3000);

                this.loadTable = false;
                this.form.button.disable = false;
                this.mensagem = error.data.mensagem;
            })
        },

        cleanInputs()
        {
            this.form.tipo.value = '';
            this.form.marca.value = '';
            this.form.nome.value = '';
            this.form.tamanho.value = 0
            this.form.genero.value = '';
            this.form.sku.value = '';
            this.form.quantidade_atual.value = 0;
        },
    }

}
</script>

<style>

</style>