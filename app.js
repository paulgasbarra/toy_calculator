const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Create HTTP get route
app.use(express.static(path.join(__dirname, 'src')));

// Start the server
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
