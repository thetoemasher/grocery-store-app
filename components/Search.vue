<template>
  <div @keypress.enter="$emit('updateSearch', {searchInput, categorySelect})" class="search-container">
      <input v-model="searchInput" placeholder="Type Here" class=""/>
      <div class="">
        <select v-model="categorySelect">
            <option value="">Select A Category</option>
            <option v-for="category in categories" :value="category">{{category}}</option>
        </select>
        <button @click="$emit('updateSearch', {searchInput, categorySelect})">Search</button>
        <button @click="clearSearch">Clear</button>
      </div>
  </div>
</template>

<script>
import groceryItems from "~/groceryitems.json"

export default {
    props: ["categories", "search"],
    data() {
        return {
            searchInput: "",
            categorySelect: ""
        }
    },
    methods: {
        clearSearch() {
            this.$emit('updateSearch', {searchInput: '', categorySelect: ''})
            this.searchInput = ""
            this.categorySelect = ""
        }
    }
  
}
</script>

<style>
.search-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 25px 0 15px 0;
    margin-bottom: 15px;
    border-bottom: 1px solid rgb(156, 156, 156);
}

.search-container input {
    height: 25px;
    width: 250px;
    border-radius: 5px;
}

.search-container select, .search-container button {
    height: 25px;
    border-radius: 5px;
    margin-left: 15px;
}

@media (max-width: 568px) {
    .search-container {
        flex-direction: column;
        align-items: center;
    }
    .search-container select, .search-container button {
        margin-top: 10px;
    }
    .search-container select {
        margin-left: 0;
    }
}
</style>
