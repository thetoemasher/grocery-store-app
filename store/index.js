export const state = () => ({
    cart: []
  })
  
  export const mutations = {
    addToCart (state, item) {
        let index = state.cart.findIndex(cartItem => cartItem.item === item.item)
        if(index === -1) {
            item.quantity = 1
            state.cart.push(item)
        } else {
            let cart = state.cart.slice()
            cart[index].quantity += 1
            state.cart = cart
        }
    },
    deleteFromCart(state, item) {
        let index = state.cart.findIndex(cartItem => cartItem.item === item.item)
        if(index !== -1) {
            state.cart.splice(index, 1)
        }
    },
    increaseQuantity(state, item) {
        let index = state.cart.findIndex(cartItem => cartItem.item === item.item)
        let cart = state.cart.slice()
        if(index !== -1) {
            cart[index].quantity++
            state.cart = cart
        }
    },
    decreaseQuantity(state, item) {
        let index = state.cart.findIndex(cartItem => cartItem.item === item.item)
        let cart = state.cart.slice()
        if(index !== -1) {
            let {quantity} = state.cart[index]
            quantity--
            if(quantity <= 0) {
                state.cart.splice(index, 1)
            } else {
                cart[index].quantity = quantity
                state.cart = cart
            }
        }
    },
    placeOrder(state) {
        state.cart = []
    }
  }