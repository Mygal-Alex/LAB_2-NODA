import express from 'express';

const shutdown = express.Router();

shutdown.route('/')
    console.log('Закриття сервера по запросу...');
    res.send('Сервер закривається по запиту...');
    server.close(() => {
    console.log('Сервер закритий.');
    });

export default shutdown;