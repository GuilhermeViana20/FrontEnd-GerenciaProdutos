<template>
    <div id="Produto">
        <h3>Atualizar Produto</h3>
        <hr />

        <div id="formulario">

            <div class="col-sm-12">
                <div class="row">

                    <div class="col-sm-3 mb-3">
                        <label for="tipo" class="form-label">{{ form.tipo.title }}</label>
                        <input :value="product.tipo" type="text" class="form-control" id="tipo">
                    </div>

                    <div class="col-sm-3 mb-3">
                        <label for="marca" class="form-label">{{ form.marca.title }}</label>
                        <input :value="product.marca" type="text" class="form-control" id="marca">
                    </div>

                    <div class="col-sm-4 mb-3">
                        <label for="nome" class="form-label">{{ form.nome.title }}</label>
                        <input :value="product.nome" type="text" class="form-control" id="nome">
                    </div>

                    <div class="col-sm-2 mb-3">
                        <label for="tamanho" class="form-label">{{ form.tamanho.title }}</label>
                        <input :value="product.tamanho" type="number" class="form-control" id="tamanho">
                    </div>

                    <div class="col-sm-4 mb-3">
                        <label for="genero" class="form-label">{{ form.genero.title }}</label>
                        <input :value="product.genero" type="text" class="form-control" id="genero">
                    </div>

                    <div class="col-sm-4 mb-3">
                        <label for="sku" class="form-label">{{ form.sku.title }}</label>
                        <input :value="product.sku" type="text" class="form-control" id="sku">
                    </div>

                    <div class="col-sm-4 mb-3">
                        <label for="quantidade" class="form-label">{{ form.quantidade.title }}</label>
                        <input :value="product.quantidade" type="number" class="form-control" id="quantidade">
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
            product: [],
            form: {
                tipo: { title: 'Tipo', value: '' },
                marca: { title: 'Marca', value: '' },
                nome: { title: 'Nome', value: '' },
                tamanho: { title: 'Tamanho', value: 0 },
                genero: { title: 'Gênero', value: '' },
                sku: { title: 'SKU', value: '' },
                quantidade: { title: 'Quantidade', value: 0 },
                button: { title: 'Atualizar', disable: false }
            }
        }
    },

    created() {
        var rota = this.$router.options.history.state.current;
        var currentRota = rota.replace('/produto/', '', this.$router.options.history.state.current);

        axios.get(urlApi + 'products/' + currentRota)
        .then(response => {
            this.product = response.data;
        })
        .catch(function (error) {
            console.log(error)
        })
    },

    methods: {
        
    }

}
</script>

<style>

</style>