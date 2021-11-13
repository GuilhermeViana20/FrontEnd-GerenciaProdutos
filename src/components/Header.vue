<template>
    <div id="navbar">
        <nav class="navbar menu navbar-expand-lg navbar-light bg-personalize">
            <div class="container-fluid">
                <div class="logo">
                    <img class="am-icon-svg icon-logo" style="width: 10rem; --icon-color:#333;">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div class="collapse navbar-collapse" id="navbarScroll">
                    <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
                        <li class="nav-item">
                            <router-link class="nav-link fw-bold" @click="isActive=!isActive" :to="{ name: 'Home' }" >Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link fw-bold" :to="{ name: 'Produtos' }">Produtos</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="css">
    * {
        font-family: 'Baloo da 2';
    }

    .logo {
        margin-right: 30px;
        margin-left: 20px;
    }

    .menu {
        height: 5rem;
        box-shadow: 0 2px 8px 0 rgb(0 0 0 / 8%);
    }

    .bg-personalize {
        background: white !important;
    }
    
</style>