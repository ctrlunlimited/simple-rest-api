
// A simple rest API in js 

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Hello Smile' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
