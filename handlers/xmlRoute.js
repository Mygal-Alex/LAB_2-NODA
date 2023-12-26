import express from 'express';
import bodyParserXml from 'body-parser-xml';

const xmlRoute = express.Router();
bodyParserXml(xmlRoute);

let xmlData = "";

xmlRoute.route('/')
  .get((req, res) => {
    console.log('GET request with XML (xmlRoute):', xmlData);
    res.send(`<h1>GET request with XML (xmlRoute)</h1><p>`);
  })

export default xmlRoute;
