// exercise 1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
let age = Number(prompt('Enter your age:'))

if(age >= 18) {
  console.log('You are old enough to drive')
} else {
  console.log(`You are left with ${18 - age} years to drive.`)
}

// exercise 1. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
let yourAge = Number(prompt('Enter your age:'))

let myAge = 25

if(yourAge > myAge) {
  console.log(`You are ${yourAge - myAge} years older than me.`)
}

// exercise 2. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in two ways using if else and ternary operator.
if(a > b) {
  console.log(`${a} is greater than ${b}`)
} else {
  console.log(`Not greater than ${b}`)
}
// OR

// a > b ? console.log(`${a} is greater than ${b}`) : console.log(`Not greater than ${b}`)

// exercise 3. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let num = Number(prompt('Enter a number:'))

if (num % 2 === 0) {
  console.log(`${num} is an even number`)
} else {
  console.log(`${num} is an odd number.`)
}
// OR
num % 2 === 0 ? console.log(`${num} is an even number`) : console.log(`${num} is an odd number.`)