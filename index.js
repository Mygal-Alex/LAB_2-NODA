import express from 'express';
import bodyParserXml from 'body-parser-xml';
import exampleRoutes from '/app/handlers/example.js';
import usersRoutes from '/app/handlers/users.js';
import xmlRoute from '/app/handlers/xmlRoute.js';
import homePage from '/app/handlers/homePage.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
bodyParserXml(app);

app.use('/', homePage);
app.use('/example', exampleRoutes);
app.use('/users', usersRoutes);
app.use('/xmlRoute', xmlRoute);

const server = app.listen(port, () => {
  console.log(`Сервер запущено на порті ${port}`);
});

app.post('/shutdown', (req, res) => {
  console.log('Закриття сервера по запросу...');
  res.send('Сервер закривається по запиту...');
  server.close(() => {
    console.log('Сервер закритий.');
  });
});

process.on('SIGTERM', () => {
  console.log('Принят сигнал завершения. Закриття сервера...');
  server.close(() => {
    console.log('Сервер закритий.');
    process.exit(0);
  });
});
