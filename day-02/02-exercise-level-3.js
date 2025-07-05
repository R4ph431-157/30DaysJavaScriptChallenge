const love = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'

let countLove = love.match(/love/gi)

// exercise 2. Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
const sentence = 'You cannot end a sentence with because because because is a conjunction'

let countBecause = sentence.match(/because/g)

// exercise 3. Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const sentence2 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

let cleanSentence = sentence2.replace(/[^a-zA-Z0-9\s]/g, '')

// exercise 4. Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let extractNum = text.match(/[\d]+/g)

let totalIncome = 0

for(let i = 0; i < extractNum.length; i++) {
  let number = Number(extractNum[i])
  
  if(number) {
    totalIncome += number
  }
}