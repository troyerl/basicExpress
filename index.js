const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', function(req, res) {
  res.send("Running");
});

app.listen(PORT);
console.log(`Server running on port http://localhost:${PORT}`);