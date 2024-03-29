const express = require('express')
const bodyParser = require('body-parser')

const app = express() // Server app instance

// Custom Middleware
const isLoggedIn = (req, res, next) => {
  let isUserLoggedIn = true; // Test

  if(!isUserLoggedIn) {
    res.send('You have not logged in. Please log in!')
    return;
  }

  next();
}

app.use(bodyParser.urlencoded())
app.use(isLoggedIn)

const USERS = [
  {
    "id": 1,
    "email": "george.bluth@reqres.in",
    "first_name": "George",
    "last_name": "Bluth",
    "avatar": "https://reqres.in/img/faces/1-image.jpg"
  },
  {
    "id": 2,
    "email": "janet.weaver@reqres.in",
    "first_name": "Janet",
    "last_name": "Weaver",
    "avatar": "https://reqres.in/img/faces/2-image.jpg"
  },
  {
    "id": 3,
    "email": "emma.wong@reqres.in",
    "first_name": "Emma",
    "last_name": "Wong",
    "avatar": "https://reqres.in/img/faces/3-image.jpg"
  },
  {
    "id": 4,
    "email": "eve.holt@reqres.in",
    "first_name": "Eve",
    "last_name": "Holt",
    "avatar": "https://reqres.in/img/faces/4-image.jpg"
  },
  {
    "id": 5,
    "email": "charles.morris@reqres.in",
    "first_name": "Charles",
    "last_name": "Morris",
    "avatar": "https://reqres.in/img/faces/5-image.jpg"
  },
  {
    "id": 6,
    "email": "tracey.ramos@reqres.in",
    "first_name": "Tracey",
    "last_name": "Ramos",
    "avatar": "https://reqres.in/img/faces/6-image.jpg"
  }
]

app.get('/', (req, res) => {
  res.send('Our first Node Express Server :)')
})

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/about.html')
})

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/contact.html')
})

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/contact.html')
})

app.get('/registration-form', (req, res) => {
  res.sendFile(__dirname + '/register.html')
})

app.get('/download-about-page', (req, res) => {
  res.download(__dirname + '/about.html')
})

app.get('/redirect-to-about', (req, res) => {
  res.redirect('/about')
})

app.get('/users', (req, res) => {
  res.json(USERS)
})

app.get('/users/even', (req, res) => {
  res.json(USERS.filter(user => user.id % 2 == 0))
})

app.get('/users/short-firstname', (req, res) => {
  res.json(USERS.filter(user => user.first_name.length <= 4))
})

app.post('/process-data', (req, res) => {
  const { firstName, lastName } = req.body
  res.send('Registration successful for ' + firstName + ' ' + lastName + '!')
})

app.listen(3000, () => {
  console.log('Server is up :)')
})














/*
  const { createServer } = require('node:http');

  const server = createServer((req, res) => {
    res.statusCode = 200;
    res.end('Our first Node Server');
  });

  server.listen(3000, () => {
    console.log('Server is up :)');
  });

  // FRAMEWORK: 
    - Express.js: Fast, unopinionated, minimalist web framework for Node.js
    - Fastify.js
    - Hapi.js

  // MIDDLEWARE: An entity between the client and the server
  Image: https://miro.medium.com/v2/resize:fit:945/1*RgPEcCE3mHSGR-fS5lXTCQ.png

  // HTTP Methods: (To be continued in REST API Class ...)
  - GET: READ
  - POST: CREATE
  - PUT/ PATCH: UPDATE
  - DELETE: DELETE
*/