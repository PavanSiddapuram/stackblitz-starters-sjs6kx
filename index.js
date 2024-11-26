const express = require('express');
const { resolve } = require('path');
const cors = require('cors'); // Import cors first

const app = express();
app.use(cors());
const port = 3000;

let products = [
  {
    id: 1,
    name: 'Xiaomi iPhone 12',
    brand: 'Xiaomi',
    price: 60000,
    ram: 6,
    rom: 256,
    rating: 4.5,
    os: 'Android',
    camera: 108,
  },
  {
    id: 2,
    name: 'Oppo Mi 10',
    brand: 'Xiaomi',
    price: 30000,
    ram: 6,
    rom: 512,
    rating: 4,
    os: 'iOS',
    camera: 64,
  },
  {
    id: 3,
    name: 'Samsung Mi 10',
    brand: 'Oppo',
    price: 20000,
    ram: 4,
    rom: 256,
    rating: 4,
    os: 'Android',
    camera: 24,
  },
  {
    id: 4,
    name: 'Apple Find X2',
    brand: 'Samsung',
    price: 60000,
    ram: 8,
    rom: 512,
    rating: 4.5,
    os: 'iOS',
    camera: 48,
  },
  {
    id: 5,
    name: 'Oppo Mi 11',
    brand: 'Xiaomi',
    price: 30000,
    ram: 12,
    rom: 128,
    rating: 4,
    os: 'iOS',
    camera: 24,
  },
  {
    id: 6,
    name: 'OnePlus Find X3',
    brand: 'Apple',
    price: 30000,
    ram: 12,
    rom: 64,
    rating: 4,
    os: 'Android',
    camera: 64,
  },
  {
    id: 7,
    name: 'Apple Pixel 5',
    brand: 'Apple',
    price: 70000,
    ram: 4,
    rom: 512,
    rating: 4.5,
    os: 'iOS',
    camera: 24,
  },
  {
    id: 8,
    name: 'Google Mi 10',
    brand: 'Oppo',
    price: 30000,
    ram: 8,
    rom: 64,
    rating: 5,
    os: 'iOS',
    camera: 108,
  },
  {
    id: 9,
    name: 'Oppo Mi 11',
    brand: 'Samsung',
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 4,
    os: 'Android',
    camera: 24,
  },
  {
    id: 10,
    name: 'Xiaomi Mi 10',
    brand: 'Oppo',
    price: 60000,
    ram: 16,
    rom: 512,
    rating: 4.5,
    os: 'Android',
    camera: 12,
  },
  {
    id: 11,
    name: 'OnePlus Pixel 5',
    brand: 'Apple',
    price: 60000,
    ram: 12,
    rom: 64,
    rating: 5,
    os: 'Android',
    camera: 12,
  },
  {
    id: 12,
    name: 'Xiaomi OnePlus 8',
    brand: 'Xiaomi',
    price: 70000,
    ram: 8,
    rom: 64,
    rating: 4.5,
    os: 'Android',
    camera: 48,
  },
  {
    id: 13,
    name: 'Xiaomi Pixel 6',
    brand: 'Oppo',
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: 'Android',
    camera: 108,
  },
  {
    id: 14,
    name: 'Samsung Find X2',
    brand: 'Oppo',
    price: 40000,
    ram: 12,
    rom: 512,
    rating: 4.7,
    os: 'Android',
    camera: 48,
  },
  {
    id: 15,
    name: 'Google OnePlus 8',
    brand: 'Apple',
    price: 20000,
    ram: 16,
    rom: 64,
    rating: 5,
    os: 'iOS',
    camera: 24,
  },
  {
    id: 16,
    name: 'OnePlus iPhone 12',
    brand: 'OnePlus',
    price: 20000,
    ram: 6,
    rom: 128,
    rating: 4.5,
    os: 'iOS',
    camera: 64,
  },
  {
    id: 17,
    name: 'Google Mi 11',
    brand: 'Oppo',
    price: 70000,
    ram: 6,
    rom: 64,
    rating: 4,
    os: 'Android',
    camera: 64,
  },
  {
    id: 18,
    name: 'Google OnePlus 9',
    brand: 'Apple',
    price: 20000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: 'Android',
    camera: 64,
  },
  {
    id: 19,
    name: 'Oppo Galaxy S22',
    brand: 'Samsung',
    price: 20000,
    ram: 16,
    rom: 256,
    rating: 4.7,
    os: 'Android',
    camera: 12,
  },
  {
    id: 20,
    name: 'Apple Pixel 5',
    brand: 'Oppo',
    price: 40000,
    ram: 8,
    rom: 128,
    rating: 4.7,
    os: 'Android',
    camera: 108,
  },
];

// Endpoint 1: Get products sorted by popularity (ratings high to low)
app.get('/products/sort/popularity', (req, res) => {
  let sortedProducts = [...products].sort((a, b) => b.rating - a.rating);
  res.json(sortedProducts);
});

// Endpoint 2: Get products sorted by price (high to low)
app.get('/products/sort/price-high-to-low', (req, res) => {
  let sortedProducts = [...products].sort((a, b) => b.price - a.price);
  res.json(sortedProducts);
});

// Endpoint 3: Get products sorted by price (low-to-high)
app.get('/products/sort/price-low-to-high', (req, res) => {
  let sortedProducts = [...products].sort((a, b) => a.price - b.price);
  res.json(sortedProducts);
});

// Endpoint 4: Filter products based on RAM
app.get('/products/filter/ram', (req, res) => {
  let ram = parseInt(req.query.ram); // Convert query parameter to an integer
  let filteredProducts = products.filter((product) => product.ram === ram);
  res.json(filteredProducts); // Send the filtered products as a response
});

// Endpoint 5: Filter products based on ROM
app.get('/products/filter/rom', (req, res) => {
  let rom = parseInt(req.query.rom);
  let filteredProducts = products.filter((product) => product.rom === rom);
  res.json({ products: filteredProducts });
});

// Endpoint 6: Filter products based on brand
app.get('/products/filter/brand', (req, res) => {
  let { brand } = req.query;
  let filteredProducts = products.filter(
    (product) => product.brand.toLowerCase() === brand.toLowerCase()
  );
  res.json({ products: filteredProducts });
});

// Endpoint 7: Filter products based on OS
app.get('/products/filter/os', (req, res) => {
  let { os } = req.query;
  let filteredProducts = products.filter(
    (product) => product.os.toLowerCase() === os.toLowerCase()
  );
  res.json({ products: filteredProducts });
});

//Endpoint 8: Filter products based on price as a value

app.get('/products/filter/price', (req, res) => {
  let { price } = req.query;
  price = parseInt(price);
  let filteredProducts = products.filter(
    (product) => product.price === parseInt(price)
  );
  res.json({ products: filteredProducts });
});

// Endpoint 9: Send original products array
app.get('/products', (req, res) => {
  res.json({ products });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
