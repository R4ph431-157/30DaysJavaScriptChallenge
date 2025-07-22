const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: "asab@asab.com",
    skills: ["HTML", "CSS", "JavaScript", "Redux", "MongoDB", "Express", "React", "Node"],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node"],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: "paul@paul.com",
    skills: ["HTML", "CSS", "JavaScript", "MongoDB", "Express", "React", "Node"],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

/* exercise: Level 1
Find the person who has many skills in the users object.
Count logged in users, count users having greater than equal to 50 points from the following object.
*/

const userData = Object.entries(users)

// Find the person who has many skills in the users object.
let userWithMostSkills = userData[0][1].skills.length

for(let i = 0; i < userData.length; i++) {
  if(userData[i][1].skills.length > userWithMostSkills) {
    userWithMostSkills = userData[i]
  }
}
console.log(userWithMostSkills)

// Count logged in users
let numOfLoggedInUsers = 0

for(let i = 0; i < userData.length; i++) {
  if(userData[i][1].isLoggedIn === true) {
    numOfLoggedInUsers += 1
  }
}
console.log(numOfLoggedInUsers)

// count users having greater than equal to 50 points from the following object
let numOfUsersWith50Points = 0

for(let i = 0; i < userData.length; i++) {
  if(userData[i][1].points >= 50) {
    numOfUsersWith50Points += 1
  }
}
console.log(numOfUsersWith50Points)

// Find people who are MERN stack developer from the users object
for(let i = 0; i < userData.length; i++) {
  if(userData[i][1].skills.includes('MongoDB') && userData[i][1].skills.includes('Express') && userData[i][1].skills.includes('React') && userData[i][1].skills.includes('Node')) {
    console.log(userData[i])
  }
}

// exercise 2. Set your name in the users object without modifying the original users object
const copyUsers = Object.assign({}, users)

copyUsers.Raphael = {
  email: "raphael@raphael.com",
  skills: ["HTML", "CSS", "JavaScript", "MongoDB", "Express", "React", "Node"],
  age: 22,
  isLoggedIn: true,
  points: 60
}
console.log(copyUsers)

// exercise 3. Get all keys or properties of users object
const usersKeys = Object.keys(users)
console.log(usersKeys)

// exercise 4. Get all the values of users object
const usersValues = Object.values(users)
console.log(usersValues)