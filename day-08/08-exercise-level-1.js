// exercises: Level 1
// Create an empty object called dog
const dog = {}
// Print the the dog object on the console
console.log(dog)
// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = 'Ciara'
dog.legs = 4
dog.color = 'black'
dog.age = 5
dog.bark = function() {
  return 'anghrrrrr woof woof'
}
// Get name, legs, color, age and bark value from the dog object
console.log(dog.name)
console.log(dog.legs)
console.log(dog.color)
console.log(dog.age)
console.log(dog.bark())
// Set new properties the dog object: breed, getDogInfo
dog.breed = 'Maltese'
dog.getDogInfo = function() {
  return `The ${this.breed} breed dog is ${this.color} in color and very friendly, playful and curious. She's ${this.age} yrs old and called ${this.name}`
}
console.log(dog)