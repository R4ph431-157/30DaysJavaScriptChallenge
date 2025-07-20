// exercise. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray(arr) {
  arr.forEach(element => {
    console.log(element)
  });
}
printArray([1,2,3,4,5])

//exercise 5.


// exercise 6. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
function reverseArray(array) {
  const reversedArray = []
  for(let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i])
  }
  return reversedArray
}
console.log(reverseArray([5,4,3,2]))

// exercise 7. Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
function capitalizeArray(array) {
  return array.map((item) => item.toUpperCase())
}
console.log(capitalizeArray(['small', 'big']))

// exercise 8. Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
function addItem(item) {
  const items = []
  items.push(item)
  return items
}
console.log(addItem('banana'))

// exercise 9. Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
function removeItem(item) {
  const items = ['banana', 'apple']
  items.splice(item, 1)
  return items
}
console.log(removeItem(0))

// exercise 10. Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
function sumOfNumbers(number) {
  let sumOfNums = 0
  for(let i = 0; i <= number; i++) {
    sumOfNums += i
  }
  return sumOfNums
}
console.log(sumOfNumbers(9))

// exercise 11. Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.\
function sumOfOdds(num) {
  let sumOfOddNums = 0
  for(let i = 0; i <= num; i++) {
    if(i % 2 === 0) {
      continue
    } else {
      sumOfOddNums += i
    }
  }
  return sumOfOddNums
}
console.log(sumOfOdds(20))

// exercise 12. Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
function sumOfEven(num) {
  let sumOfEvenNums = 0
  for(let i = 0; i <= num; i++) {
    if(i % 2 === 0) {
      sumOfEvenNums += i
    } else {
      continue
    }
  }
  return sumOfEvenNums
}
console.log(sumOfEven(20))

// exercise 13. Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
function evensAndOdds(number) {
  let numOfEvenNums = 0
  let numOfOddNums = 0
  for(let i = 0; i <= number; i++) {
    if(i % 2 === 0) {
      numOfEvenNums += 1
    } else {
      numOfOddNums += 1
    }
  }
  console.log(`The number of odds are ${numOfOddNums}.
The number of evens are ${numOfEvenNums}.`)
}
evensAndOdds(100)

// exercise 14. Write a function which takes any number of arguments and return the sum of the arguments
function takeAnyNumOfArg(...args) {
  let sum = 0
  for(let i = 0; i < args.length; i++) {
    sum += args[i]
  }
  return sum
}
console.log(takeAnyNumOfArg(1,2,3))
console.log(takeAnyNumOfArg(1,2,3,4))

// exercise 15. Writ a function which generates a randomUserIp.
function genrateRandomUserIp() {
  let randomNumber = []
  for(let i = 1; i <= 4; i++) {
    randomNumber.push(Math.floor(Math.random() * 256))
  }

  let userIp = randomNumber.join('.')
  return userIp
}
console.log(genrateRandomUserIp())

// exercise 16. Write a function which generates a randomMacAddress
function randomMacAddress() {
  let randomNum = []

  for(let i = 1; i <= 6; i++) {
    randomNum.push(Math.floor(Math.random() * 256).toString(16).toUpperCase().padStart(2, '0'))
  }

  let macAddress = randomNum.join(':')
  return macAddress
}
console.log(randomMacAddress())

// exercise 17. Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
function randomHexaNumberGenerator() {
  let hex = '#'
  let hexNum;
  for(let i = 1; i <= 3; i++) {
    hexNum = hex += Math.floor(Math.random() * 256).toString(16).padStart(2, '0')
  }
  return hexNum
}
console.log(randomHexaNumberGenerator())
