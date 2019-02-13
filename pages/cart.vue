<template>
  <div class="cart-container">
      <div v-if="!cart.length" class="no-cart">
          <p>There are no items in your cart</p>
          <nuxt-link to="/">Start Shopping</nuxt-link>
      </div>
      <div v-else class="cart-grid">
        <div v-for="item in cart" class="cart-items">
          <p class="border">{{item.item}}</p>
          <p class="border">{{item.category}}</p>
          <div class="quantity-container border">
            <div class="quantity-and-buttons">
              <p>{{item.quantity}}</p>
              <div class="quantity-buttons">
                  <button @click="$store.commit('increaseQuantity', item)">↑</button>
                  <button @click="$store.commit('decreaseQuantity', item)">↓</button>
              </div>
            </div>
          </div>
          <div class="price-container border">
            <p>${{(item.quantity * item.price).toFixed(2)}}</p>
            <button @click="$store.commit('deleteFromCart', item)">Remove</button>
          </div>
        </div>
        <div class="totals-container">
            <div class="continue-shopping">
                <nuxt-link to="/">Continue Shopping</nuxt-link>
            </div>
            <div class="totals">
                <p>Subtotal: <span>${{total.toFixed(2)}}</span></p>
                <p>Tax: <span>${{(total * 0.08).toFixed(2)}}</span></p>
                <p>Total: <span>${{(total * 1.08).toFixed(2)}}</span></p>
                <button @click="order">Place Order</button>
            </div>
        </div>
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
.no-cart {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.no-cart a {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    padding: 10px 0;
    border: 1px solid rgb(216, 216, 216);
    background: rgb(240, 240, 240);
    border-radius: 5px;
}

.cart-container {
    width: 100%;
    padding-top: 80px;
    padding-bottom: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.cart-grid {
    margin: 0 50px;
    width: 100%;
    max-width: 800px;
}

.cart-items:nth-child(odd) {
    background-color: #a2b84125;
}

.cart-items {
    min-width: 320px;
}

.column-names {
    display: flex;
    justify-content: center;
    border: 1px solid black;
    align-items: center;
    font-size: 18px;
    padding: 10px;
}

.border {
    border: 1px solid black;
    padding: 10px;
    display: flex;
    align-items: center;
}

.cart-items {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr .25fr 1fr;
}

.quantity-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between
}

.quantity-and-buttons {
    width: 25px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between
}

.quantity-buttons {
    display: flex;
    flex-direction: column;
}

.quantity-buttons button {
    border: none;
    background: none;
    font-size: 10px;
    padding: 0;
    margin-left: 5px;
}
.price-container {
    justify-content: space-between;
}

.totals-container {
    width: 100%;
    margin-top: 25px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 15px;
}

.continue-shopping {
    display: flex;
    align-items: center;
    margin: 10px;
}

.continue-shopping a {
    text-align: center;
    padding: 5px 10px;
    border: 1px solid rgb(216, 216, 216);
    background: rgb(240, 240, 240);
    border-radius: 5px;
}

.totals {
    width: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.totals p {
    width: 100%;
    margin: 5px 0;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
}

.totals button {
    width: 80%;
    font-size: 15px;
    padding: 10px 0;
    margin-top: 5px;
}

@media (max-width: 515px) {
    .price-container {
        flex-direction: column;
    }
}
</style>
