// exercise 1. Declare a function fullName and it print out your full name.
/*
function fullName() {
  console.log('my name is Idyu Raphael')
}
fullName()
*/

// exercise 2. Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName(firstName, lastName) {
 return `my name is ${firstName} ${lastName}`
}
console.log(fullName('Idyu', 'Raphael'))

// exercise 3. Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(num1, num2) {
  return num1 + num2
}
console.log(addNumbers(3, 2))

// exercise 4. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle(length, width) {
  return length * width
}
console.log(areaOfRectangle(5,2))

// exercise 5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length, width) {
  return 2 * (length + width)
}
console.log(perimeterOfRectangle(3,3))

// exercise 6. A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(length,width,height) {
  return length * width * height
}
console.log(volumeOfRectPrism(3,4,2))

// exercise 7. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle(radius, Pi = 3.14159) {
  return Pi * radius * radius
}

// exercise 8. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumOfCircle(radius, Pi = 3.14159) {
  return 2 * Pi * radius
}

// exercise 9. Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function densityOfASubstance(mass, volume) {
  return mass / volume
}

// exercise 10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
function speed(distanceCovered, amountOfTimeTaken) {
  return distanceCovered / amountOfTimeTaken
}

// exercise 11. Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function weight(mass, gravity) {
  return mass * gravity
}

// exercise 12. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
function convertCelsiusToFahrenheit(degreeInCelsisus) {
  return (degreeInCelsisus * 9 / 5) + 32
}

// exercise13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
function bodyMassIndex(weight, height) {
  let bmi = weight / (height * height)
  return bmi
}

// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more
let bmi = bodyMassIndex()
if(bmi < 18.5) {
  console.log('This nigga is Underweight')
} else if(bmi >= 18.5 && bmi <= 24.9) {
  console.log('You doing good nigga')
} else if (bmi >= 25 && bmi <= 29.9) {
  console.log('What you eating nigga, you gotta hit the gym')
} else {
  console.log('You not human brother')
}