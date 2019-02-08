Here's the overview of the app:

To be clear, this project isn't owned by the company nor will it be used by us. It's your program which you can do whatever you want with including putting it into your portfolio.

The project is a simple online grocery shopping web app. The key components are 1.) a grid of grocery store products with a category filter, and 2.) a shopping cart summary. 

I've attached a json file with the set of grocery items. Your job here would be to fill in the price, and find a good image, optimize it for web, if necessary.

With this json file you will populate these individual product components each with a product that contains: title, category, price, and imageUrl. The product component will display the title, price, and image. And in addition, an "Add to Cart" button that adds it. The category filter will be a simple drop down select element with the specified categories. The displayed grid will dynamically update to changing this category.

For the cart summary, a simple 4 column table for Item's title, quantity, price, and delete button/icon.
Below the items will be a few computed properties for the subtotal, tax amount, and grand total. Again, all dynamically updating. 
For displaying the cart, have it assume 25% of the right side of the screen. Leaving the other 75% to the grid.

Key Technology Choices that we'd recommend using, which you might very likely already using, are:
-Flexbox
-CSS Grid
-At least 1 CSS mediabreakpoint for responsiveness between desktop and mobile.
-Nuxt.js -> boilerplate / platform for creating a vue app.
Vue Specific:
-Utilizing the range of Vue Directives/attributes v-for, v-if, v-show, @click, :class, etc.
-Using all vue variables accordingly: data members, properties, and computed properties.
-Use this.$emit() to communication information up to parent
-We utilize SCSS as it gives us the nice parts of sass but the the familiar syntax of CSS. We'd recommend giving it a try.
-At least 1 Vue single file component in addition to the main page should be built. But more are welcome if you find them necessary.

So there's the gist of it. Wish I had a formal document to have off to you but you're the first one taking this project on.
Please feel free to take your own liberties in places you see fit. If you have any question, please let me know. About the project, or just any general Vue question.
