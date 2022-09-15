<template>
    <b-list-group>
        <b-alert v-if="orderPlaced" show variant="success">order success</b-alert>
        <v-row>

            <b-alert class="w-100" v-if="!cart.length" show variant="secondary">

                no prouct cart



            </b-alert>






        </v-row>


        <b-list-group-item v-for="item in cart" :key="item.id">

            <b-row>
                <b-col cols="10">
                    <b-card title="Card Title" :img-src="item.image" img-alt="Image" img-top tag="article"
                        style="max-width: 20rem;" class="mb-2">
                        <b-card-text :text="item.title">

                        </b-card-text>
                        <b-row>
                            <b-col col="1">
                                <b-button @click="reduceQty(item.id)" class="btn-sm rounded-circle" href="#"
                                    variant="primary">-</b-button>
                                {{item.qty}}
                                <b-button @click="addQty(item.id)" href="#" class="btn-sm rounded-circle"
                                    variant="primary">+</b-button>

                            </b-col>


                        </b-row>

                    </b-card>
                </b-col>
                <b-col cols="2">
                    <button @click="removeItem(item.id)" type="button" class="close" data-dismiss="modal"
                        aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </b-col>


            </b-row>


            <div class="d-grid gap-2">
                <b-button :disabled="isProcessing" @click="placeOrder" block variant="success" v-if="cart.length">

                    <span v-if="!isProcessing">checkout(${{totalPrice}})</span>
                    <b-spinner v-else></b-spinner>

                </b-button>
            </div>




        </b-list-group-item>

    </b-list-group>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    data() {
        return {
            isProcessing: false,
            orderPlaced: false,
        }
    },
    computed: {
        ...mapGetters(['cart']),
        totalPrice() {
            return this.cart.reduce((a, b) => a + b.qty * b.price, 0)
        }
    },
    methods: {
        ...mapActions(['addQty', 'reduceQty', 'removeItem', 'emptyCart']),
        placeOrder() {
            this.isProcessing = true
            setTimeout(() => {
                this.orderPlaced = true
                this.isProcessing = false
                this.emptyCart()
            }, 1000)
        }
    }
}
</script>

<style>

</style>