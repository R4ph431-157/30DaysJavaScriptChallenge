/*
 exercise 1. Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F
*/
let scores = 100
if(scores >= 0 && scores <= 49) {
  console.log('Grade F')
} else if(scores >= 50 && scores <= 59) {
  console.log('Grade D')
} else if(scores >= 60 && scores <= 69) {
  console.log('Grade C')
} else if(scores >= 70 && scores <= 89) {
  console.log('Grade B')
} else if(scores >= 80 && scores <= 100) {
  console.log('EXCELLLLLLLENTTTTTT!!!')
}

/*
exercise 2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer
*/
let userInput = prompt('Enter month:').toLowerCase()

if(userInput === 'september' || userInput === 'october' || userInput === 'november') {
  alert("It's Autumn baby!")
} else if(userInput === 'december' || userInput === 'january' || userInput === 'february') {
  console.log('Do you wanna build a snowman?')
} else if(userInput === 'march' || userInput === 'april' || userInput === 'may') {
  console.log('I present to you SPRING!')
} else if(userInput === 'june' || userInput === 'july' || userInput === 'august') {
  alert('You set for a Summer vacation?')
}

// exercise 3. Check if a day is weekend day or a working day. Your script will take day as an input.
let day = prompt('What is the day today?').toLowerCase()

if(day === 'saturday' || day === 'sunday') {
  console.log(`${day} is a weekend.`)
} else {
  console.log(`${day} is a working day.`)
}