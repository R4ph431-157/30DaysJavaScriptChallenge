// exercise 1. The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]


// Sort the array and find the min and max age
const sortedAges = ages.sort((a,b) => a - b)
let minAge = ages[0]

let maxAge = ages[ages.length - 1]
console.log(minAge)
console.log(maxAge)
// Find the median age(one middle item or two middle items divided by two)
const arrLength = sortedAges.length

const middleIndex = Math.floor(arrLength / 2)

let medianAge;

if(arrLength % 2 === 0) {
  medianAge = (sortedAges[middleIndex - 1] + sortedAges[middleIndex]) / 2
} else {
  medianAge = sortedAges[middleIndex]
}

// Find the average age(all items divided by number of items)
const sumAges = ages.reduce((acc, curr) => acc + curr, 0)

const average = sumAges / arrLength

console.log(average)

// Find the range of the ages(max minus min)
const ageRange = maxAge - minAge
console.log(ageRange)

// Compare the value of (min - average) and (max - average), use abs() method
const valueOfMin = Math.abs(minAge - average)

const valueOfMax = Math.abs(maxAge - average)

console.log(valueOfMax)
console.log(valueOfMin)

