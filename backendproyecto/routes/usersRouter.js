const express = require('express');
const faker = require('faker');
const { restart } = require('nodemon');

const router = express.Router();

router.get('/', (req, res) => {
  const users = [];
  const { size } = req.query;
  const limit = size || 100;
  for (let i = 0; i < limit; i++) {
    users.push({
      name: faker.name.findName(),
      email: faker.internet.email(),
      image: faker.image.imageUrl(),
    });
  }
  res.json(users);
});

router.delete('/:id', (req,res)=>{
    const { id } =req.params;
    res.json({
        message: 'user delete',
        id
    })
})

module.exports = router;