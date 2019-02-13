<template>
  <div>
    <nav class="nav-bar">
      <h1>Cody's Grocery Stop</h1>
      <div class="links">
        <nuxt-link to="/" >Home</nuxt-link>
        <nuxt-link to="/cart">Cart ({{cartLength}})</nuxt-link>
      </div>
    </nav>
    <nuxt />
  </div>
</template>
<script>
export default {
  computed: {
    cartLength () {
      return this.$store.state.cart.reduce((total, item) => total + item.quantity, 0)
    }
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.active-link {
  color: #263f5a;
}

.nav-bar {
  display: flex;
  flex-direction: row; 
  justify-content: space-between;
  align-items: center;
  background-color: #41b883;
  padding: 15px;
  position: fixed;
  width: 100%;
  height: 59px;
}

.nav-bar h1 {
  font-size: 25px;
}

.links {
  margin-right: 15px;
}

.links a {
  font-size: 25px;
  margin-left: 25px;
  /* color: #35495e; */
}

a {
  text-decoration: none;
  color: black;
}

@media (max-width: 515px) {
  .nav-bar h1, .links a {
    font-size: 20px;
  }
}
@media (max-width: 435px) {
  .links {
    /* margin-right: 0; */
  }
  .nav-bar h1, .links a {
    font-size: 15px;
    margin-left: 0;
  }
}
</style>
