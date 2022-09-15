<template>
    <!-- <Dialog /> -->
    <Header />
    <b-container class="mt-3">
        <b-row>
            <b-col lg="8" md="8" sm="12">
                <ProductList />
            </b-col>
            <b-col lg="4" md="4" sm="12">
                <Cart />
            </b-col>

        </b-row>

    </b-container>

</template>

<script setup>
import Cart from "./components/Cart.vue"
import Dialog from './views/Dialog.vue';
import Header from './components/Header.vue';
import ProductList from './components/ProductList.vue'
</script>

<style>

</style>