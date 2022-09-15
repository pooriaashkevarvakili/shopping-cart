<template>
    <b-card class="bg-dark">
        <b-row>
            <b-nav pills>
                <b-col cols="11">
                    <b-nav-item>
                        <span class="text-white">shopping-cart</span>
                    </b-nav-item>
                </b-col>
                <b-col>
                    <b-nav-item>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                            class="bi bi-cart text-white" viewBox="0 0 16 16">
                            <path
                                d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </svg>
                        <span class="text-white">{{totalQty}}</span>

                    </b-nav-item>
                </b-col>
            </b-nav>
        </b-row>
    </b-card>

</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters(['cart']),
        totalQty() {
            return this.cart.reduce((a, b) => a + b.qty, 0)
        }
    }
}
</script>

<style>

</style>