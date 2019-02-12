<template>
  <section class="container">
    <div class="grocery-container">
      <nuxt-link to="/cart">Cart ({{cartQuantity}})</nuxt-link>
      <input placeholder="Search" @keydown.enter="updateSearch"/>
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
          <button @click="$store.commit('addToCart', item)">Add To Cart</button>
        </div>
      </div>
    </div>
      <!-- <cart :cart="cart" @deleteItem="delteItemFromCart($event)" @placeOrder="cart=[]"/> -->
  </section>
</template>

<script>
import groceryItems from "~/groceryitems.json"

export default {
  data() {
    return {
      groceryItems,
      // cart: [],
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
    },
    cartQuantity() {
            return this.$store.state.cart.reduce((quant,  item) => quant + item.quantity, 0)
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
