// exercise 1. Declare an empty array;
const emptyArr = []

// exercise 2. Declare an array with more than 5 number of elements
const numsArr = [1,2,3,4,5,6]

// exercise 3. Find the length of your array
console.log(numsArr.length)

// exercise 4. Get the first item, the middle item and the last item of the array
console.log(numsArr[0])
console.log(numsArr[numsArr.length - 1])

// exercise 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [2, 'two', [3,4], {name: 'Raphael'}, true, 'lastGuy']

// exercise 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// exercise 7. Print the array using console.log()
console.log(itCompanies)

// exercise 8. Print the number of companies in the array
console.log(itCompanies.length)

// exercise 9. Print out each company
itCompanies.forEach((company) => console.log(company))

// exercise 10. Change each company name to uppercase one by one and print them out
itCompanies.forEach((company) => console.log(company.toUpperCase()))

// exercise 11. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.toString())

// exercise 12. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let certainCompany = 'Twitter'

for(let i = 0; i < itCompanies.length; i++) {
  if(certainCompany === itCompanies[i]) {
    return itCompanies[i]
  } else {
    return certainCompany
  }
}

// exercise 13. Filter out companies which have more than one 'o' without the filter method
for(let i = 0; i < itCompanies.length; i++) {
  let count = 0
  itCompanies[i].toLowerCase()

  for(let letter = 0; letter < itCompanies[i].length; letter++) {
    if(itCompanies[i][letter] === 'o') {
      count++
    }
  }

  if(count > 1) {
    console.log(itCompanies[i])
  }
}

// exercise 14. Sort the array using sort() method
console.log(itCompanies.sort())

// exercise 15. Reverse the array using reverse() method
console.log(itCompanies.reverse())

// exercise 16. Slice out the first 3 companies from the array
console.log(itCompanies.slice(0,1))

// exercise 17. Slice out the last 3 companies from the array
console.log(itCompanies.slice(-3))

// exercise 18. Slice out the middle IT company or companies from the array
let middleCompany = Math.floor(itCompanies.length / 2)

console.log(itCompanies.slice(middleCompany, middleCompany + 1))

// exercise 20. Remove the first IT company from the array
console.log(itCompanies.slice(0,1))

// exercise 21. Remove the last IT company from the array
console.log(itCompanies.slice(-1))

// exercise 22. Remove all IT companies
console.log(itCompanies.slice())