const express = require('express');
const app = express();

app.get('/', function(req, res) {
  console.log('test');
});

app.listen(5000);
console.log("Server running on port 5000");