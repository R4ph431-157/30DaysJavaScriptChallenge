// exercise 1. Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
const personAccount = {
  firstName: 'Raphael',
  lastName: 'Idyu',
  incomes: {
    salary: 4500,
    freelance: 2500,
    tutoring: 2000
  },
  expenses: {
    rent: 4000,
    grocery: 1000,
    electricity: 500
  },

  totalIncome: function() {
    // get the income object values as an array and loop through
    const getIncomeValues = Object.values(this.incomes)

    let calculateTotalIncome = 0
    for(let i = 0; i < getIncomeValues.length; i++) {
      calculateTotalIncome += getIncomeValues[i]
    }
    return calculateTotalIncome
  },

  totalExpense: function() {
    // get the expenses object values as an array and loop through
    const getExpensesValues = Object.values(this.expenses)

    let calculateTotalExpense = 0
    for(let i = 0; i < getExpensesValues.length; i++) {
      calculateTotalExpense += getExpensesValues[i]
    }
    return calculateTotalExpense
  },

  // pass in argument to be added as new property and value to income object
  addIncome: function(key, value) {
    this.incomes[key] = value
  },

  // pass in argument to be added as new property and value to expenses object
  addExpense: function(key, value) {
    this.expenses[key] = value
  },

  // calculate accountbalance
  accountBalance: function() {
    const calculateAccountBalance = this.totalExpense() - this.totalIncome()

    return calculateAccountBalance
  },

  // get accountInfo
  accountInfo: function() {
    const fullName = `${this.firstName} ${this.lastName}`

    const accountStatement = 
    `Account Statement for ${fullName}
Total Income: $${this.totalIncome()}
Total Expenses: $${this.totalExpense()}
Account Balance: $${this.accountBalance()}`

    return accountStatement
  }
}



/*
Questions:2, 3 and 4 are based on the following two arrays:users and products ()
*/
const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
]

const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]


/*
Imagine you are getting the above users collection from a MongoDB database.
*/

// a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.

function signUp(usersArray, newUser) {
  let userExists = false

  // Loop through the users array
  for(let i = 0; i < usersArray.length; i++) {

    // check if the passed in userEmail and userName already exists
    if(newUser.email === usersArray[i].email || newUser.username === usersArray[i].username) {
      userExists = true
      alert('user already exists!')
      break
    }
  }

  // generate a newUser details if it doesn't exist
  if(!userExists) {
    newUser._id = Math.random().toString(36).slice(2, 8)
    newUser.createdAt = new Date().toLocaleString()
    newUser.isLoggedIn = false 

    // push the generated newUser into users array/signingUp
    usersArray.push(newUser)
  }  
  return usersArray
}
console.log(signUp(users, {
  username: "Alex",
  email: "alex@alex.com",
  password: '123222'}))




/*
b. Create a function called signIn which allows user to sign in to the application
*/
function signIn(usersArray, email, password) {
  let loggedIn = false

  // loop through the users array
  for(let i = 0; i < usersArray.length; i++) {

    // check and sign in if passed in login details are correct
    if(email === usersArray[i].email && password === usersArray[i].password) {
      usersArray[i].isLoggedIn = true
      loggedIn = true
      alert('sign in success')
    }
  }

  // if login details are not correct return failed
  if(!loggedIn) {
    return 'Login failed'
  }
  return users
}
console.log(signIn(users, 'thomas@thomas.com', '123336'))



/*
The products array has three elements and each of them has six properties.
*/ 

// a. Create a function called rateProduct which rates the product
function rateProduct(productsArray, productId, userId, rating) {
  let foundProduct;
  let isRated = false

  // loop through the products array and check if passed in productId is found then store in foundProduct
  for(let i = 0; i < productsArray.length; i++) {
    if(productsArray[i]._id === productId) {
      foundProduct = productsArray[i]
    }
  }

  // if not found return not found
  if(!foundProduct) {
    console.log('Product not found')
    return
  }
  // if found loop through the found product's ratings
  for(let i = 0; i < foundProduct.ratings.length; i++) {

    // if the passed in userId has rated the product change rating value
    if(foundProduct.ratings[i].userId === userId) {
      foundProduct.ratings[i].rate = rating
      isRated = true
    }
  }

  // if passed in userId has not rated, create new rating with the userId
  if(!isRated) {
    const newRating = {
      userId: userId,
      rate: rating
    }

    // push the created rating back into the product's rating
    foundProduct.ratings.push(newRating)
  }
}
console.log(rateProduct(products, 'hedfcg', 'fg12cy', 10))




/*
b. Create a function called averageRating which calculate the average rating of a product
*/
function averageRating(productArray, productId) {
  let foundProduct;
  let sumAllRate = 0
  let averageRating

  // loop through the products array and check if the passed in productId exists
  for(let i = 0; i < productArray.length; i++) {
    if(productArray[i]._id === productId) {
      foundProduct = productArray[i]
    }
  }

  // if the passed in productId doesn't exist save not found in averageRating
  if(!foundProduct) {
    averageRating = 'Product not found'

  } else if(foundProduct.ratings.length === 0) {
    // if it has no rating save rating not found
    averageRating = 'Rating not found'

  } else {

    // if it has rating sum together each rate value and divide by total rating to get averageRating
    for(let i = 0; i < foundProduct.ratings.length; i++) {
      sumAllRate += foundProduct.ratings[i].rate
    }
    averageRating = sumAllRate / foundProduct.ratings.length
  }
  return averageRating
}



/*
Create a function called likeProduct. This function will help to like the product if it is not liked and remove like if it was liked.
*/

function likeProduct(productsArray, productId, userId) {
  let foundProduct;
  let updatedLikeStatus;

  // check if passed in productId exists in the products
  for(let i = 0; i < productsArray.length; i++) {
    if(productsArray[i]._id === productId) {
      foundProduct = productsArray[i]
    }
  }

  
  if(!foundProduct) {
    // check if product not found and save in updatedLikeStatus
    updatedLikeStatus = 'Product not found'
  } else {
    for (let i = 0; i < foundProduct.likes.length; i++) {
      if(foundProduct.likes[i] === userId) {
        // if there's a like already remove it
        foundProduct.likes.splice(foundProduct.likes.indexOf(userId), 1)

        return foundProduct
      } else {
        // else give it a like if no like
        foundProduct.likes.push(userId)

        return foundProduct
      }
    }
  }
  
}
console.log(likeProduct(products, 'hedfcg', 'fg12cy'))