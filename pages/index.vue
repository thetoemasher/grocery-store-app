<template>
  <section class="container">
    <div class="grocery-container">
      <input v-model='search' placeholder="Search"/>
        <select v-model="category">
          <option value="">Select A Category</option>
          <option v-for="category in categories" :value="category">{{category}}</option>
        </select>
      <div class="grocery-grid">
        <div v-for="item in filteredGroceries" class="grocery-item">
          <img :src="item.imageUrl"/>
          <p>{{item.item}}</p>
          <p>{{item.price}}</p>
          <p>Category: {{item.category}}</p>
          <button @click="addItemToCart(item)">Add To Cart</button>
        </div>
      </div>
    </div>
      <cart :cart="cart" @deleteItem="delteItemFromCart($event)" @placeOrder="cart=[]"/>
  </section>
</template>

<script>
import Cart from "~/components/Cart.vue"
import groceryItems from "~/groceryitems.json"

export default {
  components: {
    Cart
  },
  data() {
    return {
      groceryItems,
      cart: [],
      category: "",
      search: ""
    }
  },
  computed: {
    categories() {
      let cats = []
      for(let i = 0; i < this.groceryItems.length; i++) {
        let {category} = this.groceryItems[i]
        if(cats.indexOf(category) === -1) {
          cats.push(category)
        }
      }
      return cats
    },
    filteredGroceries() {
      if(this.category && this.search) {
        return this.groceryItems.filter(item => item.category === this.category && item.item.toLowerCase().includes(this.search.toLowerCase()))
      } else if(this.category) {
        return this.groceryItems.filter(item => item.category === this.category)
      } else if (this.search) {
        return this.groceryItems.filter(item => item.item.toLowerCase().includes(this.search.toLowerCase()))
      }
      return this.groceryItems
    }
  },
  methods: {
    addItemToCart(item) {
      let index = this.cart.findIndex(cartItem => cartItem.item === item.item)
      if(index === -1) {
        item.quantity = 1
        this.cart.push(item)
      } else {
        let cart = this.cart.slice()
        cart[index].quantity += 1
        this.cart = cart
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
  /* align-items: center; */
  text-align: center;
}

.grocery-container {
  display: flex;
  flex-direction: column;
  width: 75%;
  align-items: center;
  justify-content: space-evenly;
  padding-left: 25px;
}

.grocery-grid {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.grocery-item {
  width: 200px;
}
</style>
