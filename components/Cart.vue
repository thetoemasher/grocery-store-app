<template>
  <div class="cart-container">
      <div v-if='!cart.length'>There are no items in your cart</div>
      <div v-else>
        <div v-for='item in cart'>
          <img :src="item.imageUrl"/>
          <p>{{item.item}}</p>
          <button @click="$emit('deleteItem', item)">Delete From Cart</button>
        </div>
        <p>{{total}}</p>
      </div>
  </div>
</template>

<script>
export default {
    props: ['cart'],

    data() {
        return {
        }
    },
    computed: {
        total() {
            return this.cart.reduce((total, item) => total + item.price, 0)
        }
    }
}
</script>

<style>
    .cart-container {
        width: 25%;
    }
</style>
