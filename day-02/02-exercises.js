// exercise 1. Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.

let challenge = '30 Days Of JavaScript'

// exercise 2. Print the string on the browser console using console.log()
console.log(challenge)

// exercise 3. Print the length of the string on the browser console using console.log()
console.log(challenge.length)

// exercise 4. Change all the string characters to capital letters using toUpperCase() method
 const stringUpperCase = challenge.toUpperCase()

// exercise 5. Change all the string characters to lowercase letters using toLowerCase() method
const stringLowerCase = challenge.toLowerCase()

// exercise 6. Cut (slice) out the first word of the string using substr() or substring() method
const sliceFirstWord = challenge.substring(0, 1)

// exercise 7. Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
const slicePhrase = challenge.substring(3, 21)

// exercise 8. Check if the string contains a word Script using includes() method
const checkScript = challenge.includes('Script')

// exercise 9. Split the string into an array using split() method
const splitString = challenge.split('')

// exercise 10. Split the string 30 Days Of JavaScript at the space using split() method
const splitStringAtSpace = challenge.split(' ')

// exercise 11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
const strSocials = 'Facebook Google Microsoft Apple IBM Oracle Amazon'

const splitSocialsAtComma = strSocials.split(' ')

// exercise 12. Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
const changeToPython = challenge.replace('JavaScript', 'Python')

// exercise 13. What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
const checkIndex15 = challenge.charAt(15)

// exercise 14. What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
const checkCharCode = challenge.charCodeAt('J')

// exercise 15. Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
const checkIndexA = challenge.indexOf('a')

// exercise 16. Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
const checkLastIndexA = challenge.lastIndexOf('a')

// exercise 17. Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
const randomSentence = 'You cannot end a sentence with because because because is a conjunction'

let checkRandomSentence = randomSentence.indexOf('because')

// exercise 18. Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
checkRandomSentence = randomSentence.lastIndexOfndexOf('because')

// exercise 19. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
checkRandomSentence = randomSentence.search('because')

// exercise 20. Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
const trimWhiteSpace = challenge.trim()

// exercise 21. Use startsWith() method with the string 30 Days Of JavaScript and make the result true
const checkStartString = challenge.startsWith('30')

// exercise 22. Use endsWith() method with the string 30 Days Of JavaScript and make the result true
const checkEndString = challenge.endsWith('JavaScript') 

// challenge.endsWith('t') also results to true

// exercise 23. Use match() method to find all the a’s in 30 Days Of JavaScript
const checkForA = challenge.match(/a/g)

// exercise 24. Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let string = '30 Days of'

let mergeStr = string.concat('JavaScript')

// exercise 25. Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(2))