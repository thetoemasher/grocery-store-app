<template>
  <div class="cart-container">
      <div v-if="!cart.length">There are no items in your cart</div>
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
          <button @click="$emit('deleteItem', item)">Delete</button>
        </div>
        <p>Subtotal: {{total.toFixed(2)}}</p>
        <p>Tax: {{(total * 0.08).toFixed(2)}}</p>
        <p>Total: {{(total * 1.08).toFixed(2)}}</p>
        <button @click="$emit('placeOrder')">Place Order</button>
      </div>
  </div>
</template>

<script>
export default {
    props: ["cart"],

    data() {
        return {
        }
    },
    computed: {
        total() {
            return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0)
        }
    }
}
</script>

<style>
    .cart-container {
        width: 25%;
        position: fixed;
        top: 0;
        right: 0;
        padding-top: 50px;
    }

    .cart-items {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;

    }
</style>
