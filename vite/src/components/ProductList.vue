<template>

    <b-row>

        <b-card style="max-width:20rem" v-for="item in products" :key="item.id" img-alt="Image" img-top tag="article"
            class="mt-2 m-2">

            <img :src="item.image" width="260" height="260" />
            <b-card-text :text="item.title"></b-card-text>
            <b-card-text :text="item.price"></b-card-text>
            <b-button @click="addToCart(item)" href="#" variant="primary">add to cart</b-button>
        </b-card>


    </b-row>





</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['products'])
    },

    methods: {
        ...mapActions(['getProduct', 'addToCart'])
    },
    mounted() {
        this.getProduct()
    }
}
</script>

<style>

</style>