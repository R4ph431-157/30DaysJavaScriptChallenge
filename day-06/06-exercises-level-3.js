import { webTechs, countries, mernStack } from './06-exercises-level-2'

// Copy countries array(Avoid mutation)
countries.map((country) => country )

// exercise 2. Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
const copiedCountries = countries.map((country) => country )

const sortedCountries = copiedCountries.sort()

// exercise 3. Sort the webTechs array and mernStack array
const sortedWebTechs = webTechs.sort()
console.log(sortedWebTechs)

const sortedStack = mernStack.sort()
console.log(sortedStack)

// exercise 4. Extract all the countries contain the word 'land' from the countries array and print it as array
const landCountries = countries.filter((country) => {
if(country.includes('land')) {
  return true
} else {
  false
}
})

console.log(landCountries)

// exercise 5. Find the country containing the highest number of characters in the countries array
let highestNum = countries[0]

countries.forEach((country) => {
  if(country.length > highestNum.length) {
    highestNum = country
  } else {
    highestNum = highestNum
  }
})
console.log(highestNum)

// exercise 6. Extract all the countries containing only four characters from the countries array and print it as array
const extractCountries = countries.filter((country) => {
  if(country.length === 4) {
    return true
  } else {
    return false
  }
})

console.log(extractCountries)

// exercise 7. Reverse the countries array and capitalize each country and stored it as an array
const modifiedCountries = countries.map((country) => country.toUpperCase())

console.log(modifiedCountries.reverse())
