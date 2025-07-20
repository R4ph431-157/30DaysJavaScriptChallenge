// const countries = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya'
// ]

export const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

export const mernStack = ['MongoDB', 'Express', 'React', 'Node']

// exercise 1. Develop a small script which generate any number of characters random id:
let randomCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

let randomId = ''

for(let i = 0; i < 9; i++) {
  let randomIndex = Math.floor(Math.random() * randomCharacters.length)

  randomId += randomCharacters[randomIndex]
}
console.log(randomId)

// exercise 4. Using the above countries array, create the following new array.
let newArr = []

for(let i = 0; i < countries.length; i++) {
  let changedCountries = countries[i].toUpperCase()
  newArr.push(changedCountries)
}
console.log(newArr)

// exercise 5. Using the above countries array, create an array for countries length'.
let strLength = []
for(let i = 0; i < countries.length; i++) {
  strLength.push(countries[i].length)
}
console.log(strLength)

// exercise 6. Use the countries array to create the following array of arrays:
export const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Iceland',
  'Japan',
  'Kenya'
]


const resultArr = []

for(let i = 0; i < countries.length; i++) {
  const groupArr = []
  groupArr.push(countries[i])
  groupArr.push(countries[i].slice(0,3).toUpperCase())
  groupArr.push(countries[i].length)

  resultArr.push(groupArr)
}
console.log(resultArr)

// exercise 7. In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
const arrLand = []

countries.forEach(country => {
  if(country.includes('land')) {
    arrLand.push(country)
  } else {
    console.log('All these countries are without land')
  }
});
console.log(arrLand)

// exercise 8. In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
const result = []

countries.forEach(country => {
  if(country.endsWith('ia')) {
    result.push(country)
  } else {
    console.log('These are countries that ends without ia')
  }
});
console.log(result)



// exercise 9. Using the above countries array, find the country containing the biggest number of characters.
let biggestCharacterCountry = countries[0]

for(let i = 1; i < countries.length; i++) {
  if(countries[i].length > biggestCharacterCountry.length) {
    biggestCharacterCountry = countries[i]
  } else {
    biggestCharacterCountry = biggestCharacterCountry
  }
}

console.log(biggestCharacterCountry)


// exercise 10. Using the above countries array, find the country containing only 5 characters.
const onlyFiveCharacters = []

for(let i = 0; i < countries.length; i++) {
  if(countries[i].length === 5) {
    onlyFiveCharacters.push(countries[i])
  }
}
console.log(onlyFiveCharacters)

// exercise 11. Find the longest word in the webTechs array
let longestWord = webTechs[0]

for(let i = 1; i < webTechs.length; i++) {
  if(webTechs[i].length > longestWord.length) {
    longestWord = webTechs[i]
  } else {
    longestWord = longestWord
  }
}
console.log(longestWord)

// exercise 12. Use the webTechs array to create the following array of arrays:
const webTechsArr = []

for(let i = 0; i < webTechs.length; i++) {
  const groupArr = []
  groupArr.push(webTechs[i])
  groupArr.push(webTechs[i].length)

  webTechsArr.push(groupArr)
}
console.log(webTechsArr)

// exercise 13. An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
let getFirstStr = mernStack.map((str) => str[0])

let mernAcronym = getFirstStr.join('')

console.log(mernAcronym)

// exercise 14. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
for(let i = 0; i < webTechs.length; i++) {
  console.log(webTechs[i])
}

// exercise 15. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
const fruitsArr = ['banana', 'orange', 'mango', 'lemon']

reversedFruits = []

for(let i = fruitsArr.length - 1; i >= 0; i--) {
  reversedFruits.push(fruitsArr[i])
}
console.log(reversedFruits)