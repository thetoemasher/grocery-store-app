<template>
  <div class="cart-container">
      <div v-if="!cart.length">There are no items in your cart
          <nuxt-link to="/">Start Shopping</nuxt-link>
      </div>
      <div v-else class="cart-grid">
        <div class="cart-items">
          <p>Name</p>
          <p>Category</p>
          <p>Quantity</p>
        </div>
        <div v-for="item in cart" class="cart-items">
          <p>{{item.item}}</p>
          <p>{{item.category}}</p>
          <p>{{item.quantity}}</p>
          <button @click="$store.commit('increaseQuantity', item)">Up</button>
          <button @click="$store.commit('decreaseQuantity', item)">Down</button>
          <button @click="$store.commit('deleteFromCart', item)">Delete</button>
        </div>
        <p>Subtotal: {{total.toFixed(2)}}</p>
        <p>Tax: {{(total * 0.08).toFixed(2)}}</p>
        <p>Total: {{(total * 1.08).toFixed(2)}}</p>
        <button @click="order">Place Order</button>
        <nuxt-link to="/">Continue Shopping</nuxt-link>
      </div>
  </div>
</template>

<script>
export default {
    computed: {
        cart() {
            return this.$store.state.cart
        },
        total() {
            return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0)
        },
    },
    methods: {
        order() {
            this.$store.commit('placeOrder')
            alert(`Order has been placed! \nThank you for your purchase!`)
            this.$router.push({path: '/'})
        }
    }
}
</script>

<style>
.cart-container {
        width: 100%;
    }

.cart-items {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}
</style>
