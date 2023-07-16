const http = require('http');

// Create server

http.createServer((req, res) => {
  // Write response
  res.write('Hey Darling');
  res.end();
}).listen(5000, _=>console.log('Server running'));
