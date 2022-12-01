const express = require('express');

const faker = require('faker');

const router = express.Router();

router.get('/', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 100;
  for (let i = 0; i < limit; i++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      fecha: faker.date.past(),
      image: faker.image.imageUrl(),
    });
  }
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('Yo soy un filtro');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  if (id === '999') {
    res.status(404).json({
      message: 'Product not found',
    });
  } else {
    res.status(200).json({
      id,
      name: 'Envio a Cartagena',
      fecha: '2021-09-01',
      price: 1000
    })
  }
});

router.post('/', (req, res) => {
  const body = req.body;
  res. status(201).json({
    message: 'Producto creado',
    data: body
  })
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'Producto actualizado',
    data: body,
    id,
  })
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'Eliminado',
    id,
  })
});

module.exports = router;