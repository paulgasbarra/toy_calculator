const express = require('express');

const app = express();

// Create HTTP get route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(3000, () => {
  console.log(`Listening on port 3000`);
});
