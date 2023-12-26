import express from 'express';

const usersRoutes = express.Router();

usersRoutes.get('/', (req, res) => {
  const users = [
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
  ];

  res.json({ data: users });
});

export default usersRoutes;
