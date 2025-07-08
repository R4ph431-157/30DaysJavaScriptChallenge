const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

// Iterate 0 to 10 using for loop, do the same using while and do while loop
for(let i = 0; i < countries.length; i++) {
  console.log(countries[i])
  console.log(i)
}
// OR
/*
let i = 0
while(i < countries.length) {
  console.log(countries[i])
  console.log(i)
  i++
}
*/

// Iterate 10 to 0 using for loop, do the same using while and do while loop
for(let i = countries.length - 1; i >= 1; i--) {
  console.log(countries[i])
  console.log(i)
}
// OR
let i = countries.length - 1
while(i >= 1) {
  console.log(countries[i])
  console.log(i)
  i--
}

// Iterate 0 to n using for loop
for(let i = 0; i < n.length; i++) {
  console.log('Iterate 0 to n using for loop')
}
// Write a loop that makes the following pattern using console.log(): 
/*
#
##
###
####
#####
######
#######
*/
for(let i = 1; i <= 7; i++) {
  console.log('#'.repeat(i))
}

// exercise 1. Use for loop to iterate from 0 to 100 and print only even numbers
for(let i = 0; i <= 100; i++) {
  if(i % 2 === 0) {
    console.log(i)
  } else {
    continue
  }
}

// exercise 2. Use for loop to iterate from 0 to 100 and print only odd numbers
for(let i = 0; i <= 100; i++) {
  if(i % 2 === 0) {
    continue
  } else {
    console.log(i)
  }
}

// exercise 4. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sumAll = 0
for(let i = 0; i <= 100; i++) {
  sumAll += i
}
console.log(`The sum of all numbers from 0 to 100 is ${sumAll}.`)

// exercise 5. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let evenNum = 0
let oddNum = 0
for(let i = 0; i <= 100; i++) {
  if(i % 2 === 0) {
    evenNum += i
  } else {
    oddNum += i
  }
}
console.log(`The sum of all evens from 0 to 100 is ${evenNum}. And the sum of all odds from 0 to 100 is ${oddNum}.`)

// exercise 6. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
let evenAndOddArr = []
for(let i = 0; i <= 100; i++) {
  if(i % 2 === 0) {
    evenNum += i
  } else {
    oddNum += i
  }
}
evenAndOddArr.push(evenNum, oddNum)
console.log(evenAndOddArr)

// exercise 7. Develop a small script which generate array of 5 random numbers
const arrFiveNum = []

for(let i = 0; i < 5; i++) {
  arrFiveNum.push(Math.floor(Math.random() * 11))
}
console.log(arrFiveNum)

// exercise 8. Develop a small script which generate array of 5 random numbers and the numbers must be unique
const uniqueArr = []

for(let i = 0; i < 5; i++) {
  const randomNum = Math.floor(Math.random() * 21)

  if(uniqueArr.includes(randomNum)) {
    continue
  } else {
    uniqueArr.push(randomNum)
  }
}
console.log(uniqueArr)

// exercise 9. Develop a small script which generate a six characters random id:
let randomCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

let randomId = ''

for(let i = 0; i < 6; i++) {
  let randomIndex = Math.floor(Math.random() * randomCharacters.length)

  randomId += randomCharacters[randomIndex]
}
console.log(randomId)