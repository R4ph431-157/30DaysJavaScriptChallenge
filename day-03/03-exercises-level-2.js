// exercise 1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

let base = Number(prompt('Enter base:'))
let height = prompt('Enter height:')

let result = 0.5 * base * height

console.log(`The area of the triangle is ${result}`)

// exercise 1. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

let sideA = Number(prompt('Enter side a:'))

let sideB = Number(prompt('Enter side b:'))

let sideC = Number(prompt('Enter side c:'))

let perimeter = Number(sideA + sideB + sideC)

console.log(`The perimeter of the triangle is ${perimeter}`)

// exercise 1. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let length = Number(prompt('Enter length:'))

let width = Number(prompt('Enter width:'))

let calculateArea = length * width

let calculatePerimeter = 2 * (length + width)


// exercise 2. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let radius = Number(prompt('Enter radius:'))

let areaOfCircle = 3.14 * radius * radius

let circumferenceOfCircle = 2 * 3.14 * radius

// exercise 7. Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
let hours = Number(prompt('Enter hours:'))

let ratePerHour = Number(prompt('Enter rate per hour:'))

console.log(`Your weekly earning is ${hours * ratePerHour}`)

// exercise 8. If the length of your name is greater than 7 say, your name is long else say your name is short.
const myName = 'Raphael'

if(myName.length > 7) {
  console.log('I got a great name')
} else {
  console.log('I still got a great name, just a bit short but idc!')
}

// exercise 9. Compare your first name length and your family name length and you should get this output.
const firstName = 'Raphael'

const lastName = 'Idyu'

if(firstName.length > lastName.length) {
 console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`)
}

// exercise 1. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
let birthYear = Number(prompt('Enter birth year:'))

let currentYear = new Date().getFullYear()

let userAge = currentYear - birthYear

if(userAge >= 18) {
  console.log(`You are ${userAge}. You are old enough to drive`)
} else {
  console.log(`You are ${userAge}. You will be allowed to drive after ${18 - userAge}`)
}

// exercise 2. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
let numOfYears = Number(prompt('Enter number of years you live:'))

let daysInYear = 365

let hoursInDay = 24

let minutesInHour = 60

let secondsInMinutes = 60

console.log(`You lived ${numOfYears * daysInYear * hoursInDay * minutesInHour * secondsInMinutes}`)