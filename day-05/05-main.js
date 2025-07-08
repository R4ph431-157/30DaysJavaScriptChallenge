// exercise 1. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
import { webTechs } from './05-web-techs.js'

import { countries } from './05-countries.js'



// exercise 2. First remove all the punctuations and change the string to array and count the number of words in the array
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

let removePunctuation = text.replace(/[.,]/g, '')

const wordsArr = removePunctuation.split(' ')
console.log(wordsArr)
console.log(wordsArr.length)

// exercise 4. add 'Meat' in the beginning of your shopping cart if it has not been already added
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

shoppingCart.unshift('Meat')
console.log(shoppingCart)

// exercise 5. add Sugar at the end of your shopping cart if it has not been already added
shoppingCart.push('Sugar')
console.log(shoppingCart)

// exercise 6. remove 'Honey' if you are allergic to honey
console.log(shoppingCart.slice(4, 5))

// exercise 7. modify Tea to 'Green Tea'
shoppingCart[3] = 'Green Tea'

// exercise 8. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
countries.forEach((country) => {
  if(country === 'Ethiopia') {
    console.log('ETHIOPIA')
  } else {
    countries.push('Ethiopia')
  }
})

// exercise 9. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
let isPresent;

for(let i = 0; i < webTechs.length; i++) {
  if(webTechs[i] === 'Sass') {
    console.log('Sass is a CSS preprocess')
    isPresent = true
  } 
}

if(!isPresent) {
  webTechs.push('Sass')
}
console.log(webTechs)

// exercise 10. Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']

const backEnd = ['Node','Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

// exercise 11. Slice the first ten countries from the countries array
console.log(countries.slice(0,10))

// exercise 12. Find the middle country(ies) in the countries array
let countryIndex = Math.floor(countries.length / 2)

let middleCountry = countries.slice(countryIndex, countryIndex + 1)

console.log(middleCountry)

// exercise 13. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
let countriesLength = countries.length

let halvingIndex;

if(countriesLength % 2 === 0) {
  halvingIndex = Math.floor(countriesLength / 2)
  console.log(countries.slice(0,halvingIndex))
} else {
  halvingIndex = Math.floor((countriesLength + 1) / 2)
  console.log(countries.slice(halvingIndex))
}