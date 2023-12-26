import express from 'express';

const exampleRoutes = express.Router();

let currentValue = 'Base value'; 

exampleRoutes.route('/')
  .get((req, res) => {
    console.log('GET request');
    res.json({ message: currentValue });
  })
  .post((req, res) => {
    console.log('POST request:', req.body);

    currentValue = req.body.newValue;

    res.send('POST request received');
  })
  .options((req, res) => {
    console.log('OPTIONS request');

    res.setHeader('Allow', 'GET, POST, OPTIONS');
    res.sendStatus(200);
});

export default exampleRoutes;
