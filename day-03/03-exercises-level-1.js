// exercise 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
const firstName = 'Raphael'
console.log(typeof firstName)

const lastName = 'Idyu'
console.log(typeof lastName)

let country = 'Nigeria'
console.log(typeof country)

let city = 'Earth'
console.log(typeof city)

let age = 21
console.log(typeof age)

let isMarried = false
console.log(typeof isMarried)

let year = 2025
console.log(typeof year)

// exercise 2. Check if type of '10' is equal to 10
console.log(typeof '10' === 10)

// exercise 3. Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') === 10)

// exercise 5. Write three JavaScript statement which provide truthy value.
'hello'
'JavaScript'
1

// exercise 6. Write three JavaScript statement which provide falsy value.
null
undefined
0

// exercise 7 to exercise 18. Figure out the result of the following comparison expression first without using console.log()

4 > 3 // true
4 >= 3 // true
4 < 3 // false
4 <= 3 // false
4 == 4 // true
4 === 4 // true
4 != 4 // false
4 !== 4 // false
4 != '4' // false
4 == '4' // true
4 === '4' // false

// exercise 19. Find the length of python and jargon and make a falsy comparison statement.
let word1 = 'python'
let word2 = 'jargon'

let len1 = word1.length
let len2 = word2.length

let falsyCompare = len1 !== len2

// exercise 20 to exercise 30. Figure out the result of the following expressions first without using console.log()

4 > 3 && 10 < 12 // true
4 > 3 && 10 > 12 // false
4 > 3 || 10 < 12 // true
4 > 3 || 10 > 12 // true
!(4 > 3)         // false
!(4 < 3)         // true
!(false)         // true
!(4 > 3 && 10 < 12) // false
!(4 > 3 && 10 > 12) // true
!(4 === '4')        // true

// exercise 32 to 39. Use the Date object to do the following activities
// What is the year today?
let today = new Date()
let yearToday = today.getFullYear()

// What is the month today as a number?
let monthToday = today.getMonth()
console.log(monthToday)

// What is the date today?
let dateToday = today.getDate()

// What is the day today as a number?
let dayToday = today.getDay()

// What is the hours now?
let hoursNow = today.getHours()

// What is the minutes now?
let minutesNow = today.getMinutes()

// Find out the numbers of seconds elapsed from January 1, 1970 to now.
let secondsSince1970 = Math.floor(Date.now() / 1000)
