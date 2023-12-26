import express from 'express';

const homePage = express.Router();

let currentValue = 'Home Page'; 

homePage.route('/')
  .get((req, res) => {
    console.log('GET request');
    res.send(currentValue);
  })

export default homePage;
