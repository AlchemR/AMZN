Amazon is a widely used E-commerce web site.  Users can  add or read reviews about individual products, as well as look at detailed product images and descriptions to evaluate items before purchasing.

### 1: Host on Heroku (1 day , 7-21-2022)

### 2: User Authentication (2 days , 7-11-2022)
* User can Sign up, Sign in, Sign out
* User can use Demo account to see site features
* User can't access certain site pages and features without logging in (create reviews, save shopping cart / save for later)

### 3: Product Listings (2 days, 7-13-2022)
* seed database with product listings of general categories, title / descriptions (1 day)
* After reviews and search are completed, ensure that the listings are connected and display as intended
* users can view and search products by their listings, reviews and categories

### 4: Shopping Cart - CRUD - (3 days, 7-16-2022)
* users can add, remove items from shopping carts
* users can add items from "saved for later"
* (bonus) mock checkout feature


### 5: Reviews/Ratings - CRUD - (2, 7-18-2022)
* users can create reviews about individual product from their listings
* reviews are displayed and filtered, (bonus search-able) in the specific products detail page
* (bonus) users can add an image to their reviews
* (bonus) users can edit their reviews to update them at a later point in time

### 6: Search - (2 days, 7-20-2022)
* users can search / display by product category and price
* users can search for keywords or partial words in product titles and descriptions


### 7: Production Readme (.5 days, 7-21-2022)
* update Production Readme to represent the site before launch

### Bonus: Categories / Recommended categories

### (Bonus: Search autocomplete within available categories)

### Bonus: Lists (user shopping history, user reviews, user saved for later)













{
  entities: {
    users: {
      1 : {
        id : 1,
        email : "email@email.com",
        password_digest : "password",
        session_token : "hashed string",
        reviews : ["review1", "review2"],
        cart : 1
      }
    },
    carts : {
      1 : {
        id: 1,
        user : 1,
        products : [1, 2, 3, 3]
      }
    },
    products : {
      1 : {
        id : 1,
        title : "fur boots",
        description: "Clem Cashmere Scarf",
        category : "Accessories",
        size : "One Size",
        color : 'Red',
        price : 65,
        cart_id : 1,
        reviews : [1, 2, 3, 3]
      }
    },
    reviews: {
      1 : {
        id : 1,
        title : "Cashmere scarf",
        body : "I bought two of the cashmere scarfs for Christmas presents. One for my daughter and one for my Granddaughter.. they were the biggest hits of Christmas!! The quality of the cashmere is the best I've been able to find!!",
        rating : 5,
        user_id : 1,
        product_id : "product123"
      }
    },
  },
  ui : {
    loading : true / false,
  },
  errors : {
    login : ["Incorrect username/password combination"],
    reviewForm : ["Review body cannot be blank"]
  },
  session : {
    currentUser : { currentUserId: 25 }
  }
}