<template>
  <section class="container">
      <div class="grocery-grid">
        <div v-for='item in groceryItems'>
          <img :src="item.imageUrl"/>
          <p>{{item.item}}</p>
          <button @click='addItemToCart(item)'>Add To Cart</button>
        </div>
      </div>
      <cart :cart='cart' v-on:deleteItem='delteItemFromCart($event)'/>
  </section>
</template>

<script>
import Cart from '~/components/Cart.vue'
import groceryItems from '~/groceryitems.json'

export default {
  components: {
    Cart
  },
  data() {
    return {
      groceryItems,
      cart: []
    }
  },
  methods: {
    addItemToCart(item) {
      let index = this.cart.findIndex(cartItem => cartItem.item === item.item)
      if(index === -1) {
        this.cart.push(item)
      } else {
        alert(`${item.item} is already in your cart`)
      }
    },
    delteItemFromCart(item) {
      let index = this.cart.findIndex(cartItem => cartItem.item === item.item)
      if(item !== -1) {
        this.cart.splice(index, 1)
      } else {
        alert(`${item.item} is not in your cart`)
      }
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}

.grocery-grid {
  width: 75%;
}
</style>
