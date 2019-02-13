<template>
  <section class="container">
      <search :categories="categories" @updateSearch="updateSearch($event)"/>
    <div class="grocery-container">
      <div class="grocery-grid" v-show="filteredGroceries.length">
        <div v-for="item in filteredGroceries" class="grocery-item">
          <div class="grocery-img">
            <img :src="item.imageUrl"/>
          </div>
          <p>{{item.item}}</p>
          <p>${{item.price}}</p>
          <p>Category: {{item.category}}</p>
          <button @click="$store.commit('addToCart', item)">Add To Cart</button>
        </div>
      </div>
      <div v-show="!filteredGroceries.length">Sorry. Couldn't find any thing that matched your search.</div>
    </div>
  </section>
</template>

<script>
import groceryItems from "~/groceryitems.json"
import Search from '~/components/Search'

export default {
  components: {
    Search
  },
  data() {
    return {
      groceryItems,
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
    updateSearch(e) {
      this.search = e.searchInput
      this.category = e.categorySelect
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  width: 100vw;
  text-align: center;
  padding: 59px 25px 25px 25px;
}

.grocery-grid {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.grocery-item {
  width: 205px;
  border: 1px solid rgb(202, 202, 202);
  border-radius: 4px;
  margin: 5px;
  padding: 5px;
}

.grocery-img {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

button {
  border: 1px solid rgb(216, 216, 216);
  background: rgb(240, 240, 240);
  border-radius: 5px;
}

input, button, select {
  outline: none;
}
</style>
