import { createStore } from 'vuex'
import products from '@/mock/products'
export default createStore({
    state: {
        products: [],
        cart: []
    },
    getters: {
        products: state => state.products,
        cart: state => state.cart
    },
    mutations: {
        getProductData(state) {
            state.products = products
        },
        addItemToCart(state, item) {
            const addItem = state.cart.find(product => product.id === item.id)
            if (addItem) {
                addItem.qty++
            } else {
                state.cart.push({ ...item, qty: 1 })

            }
        },
        addQty(state, id) {
            const currentItem = state.cart.find(product => product.id === id)
            currentItem.qty++
        },
        reduceQty(state, id) {
            const currentItem = state.cart.find(product => product.id === id)
            if (currentItem.qty > 1) {
                currentItem.qty--
            } else {
                state.cart = state.cart.filter(product => product.id !== id)

            }

        },
        removeItem(state, id) {
            state.cart = state.cart.filter(product => product.id !== id)
        },
        emptyCart() {
            state.cart = []
        }
    },
    actions: {
        getProduct({ commit }) {
            commit('getProductData')
        },
        addToCart({ commit }, item) {
            commit('addItemToCart', item)
        },
        addQty({ commit }, id) {
            commit('addQty', id)
        },
        reduceQty({ commit }, id) {
            commit('reduceQty', id)

        },
        removeItem({ commit }, id) {
            commit('removeItem', id)
        },
        emptyCart({ commit }) {
            commit('emptyCart')
        }

    },
    modules: {
    }
})

