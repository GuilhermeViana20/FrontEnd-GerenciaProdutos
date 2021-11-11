import { createWebHistory, createRouter } from "vue-router";
import Home from '@/views/Home.vue';
import ProductsList from '@/views/Products/ProductsList.vue';
import ProductDetail from '@/views/Products/ProductDetail.vue';

const history = createWebHistory();
const router = createRouter({
    history,
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/produtos/',
            name: 'Produtos',
            component: ProductsList,
        },
        {
            path: '/produto/:id',
            name: 'Produto',
            component: ProductDetail
        }
    ]
})

export default router;