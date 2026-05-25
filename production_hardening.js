const http = require('http');

const PORT = process.env.PORT || process.argv[2] || 3000;

const securityHeaders = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Referrer-Policy': 'no-referrer',
  'Access-Control-Allow-Origin': '*',
};

const server = http.createServer((req, res) => {
  // Handle OPTIONS preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204, securityHeaders);
    return res.end();
  }

  if (req.method === 'GET' && req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json', ...securityHeaders });
    return res.end(JSON.stringify({ ok: true }));
  }

  if (req.method === 'GET' && req.url === '/boom') {
    try {
      throw new Error('Boom!');
    } catch (err) {
      res.writeHead(500, securityHeaders);
      return res.end('Internal Server Error');
    }
  }

  res.writeHead(404, securityHeaders);
  res.end('Not Found');
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});