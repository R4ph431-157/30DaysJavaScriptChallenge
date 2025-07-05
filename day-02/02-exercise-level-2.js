const str = "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."

console.log(str)

// exercise 2
const quoteByMotherTeresa = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."

console.log(quoteByMotherTeresa)

// exercis 3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log(typeof '10' === 10)

let num = Number('10')
console.log(num === 10)

// exercise 4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log(parseFloat('9.8') === 10)

let float = Math.round(parseFloat('9.8'))
console.log(float === 10)

// exercise 5. Check if 'on' is found in both python and jargon
if('jargon'.includes('on') && 'python'.includes('on')) {
  console.log('Hi, I AM HERE!')
} else {
  console.log('DOES NOT EXIST, SORRY!!')
}

// exercise 6. I hope this course is not full of jargon. Check if jargon is in the sentence.
const checkJargon = 'I hope this course is not full of jargon'
console.log(checkJargon.includes('jargon'))

// exercise 7. Generate a random number between 0 and 100 inclusively.
const randomNum = Math.random()

let numBtwnZeroAndHundred = randomNum * 101

let randomNumRoundToHundred = Math.floor(numBtwnZeroAndHundred)

console.log(randomNumRoundToHundred)

// exercise 8. Generate a random number between 50 and 100 inclusively.
let generateRandomNum = Math.random()

let numBtwnZeroAndFifty = generateRandomNum * 51

let numBtwnFiftyAndHundred = Math.floor(numBtwnZeroAndFifty) + 50

console.log(numBtwnFiftyAndHundred)

// exercise 9. Generate a random number between 0 and 255 inclusively.
let numBtwnZeroAndTwoFiftyFive = generateRandomNum * 256

let numRoundDown = Math.floor(numBtwnZeroAndTwoFiftyFive)

console.log(numRoundDown)

// exercise 10. Access the 'JavaScript' string characters using a random number.
const string = 'JavaScript'

let randomNumber = Math.random() * string.length

let result = Math.floor(randomNumber)

// exercise 11. Use console.log() and escape characters to print the following pattern.
console.log('1\t1 \t1 \t1 \t1 \t2 \t1 \t2 \t4 \t8 \t3 \t1 \t3 \t9 \t27 \t4 \t1 \t4 \t16 \t64 \t5 \t1 \t5 \t25 \t125')

// exercise 12. Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
const sentence = 'You cannot end a sentence with because because because is a conjunction'

let newSentence = sentence.substring(31, 54)
