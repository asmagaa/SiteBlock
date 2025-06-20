const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;
const SCRIPT_PATH = path.join(__dirname, 'dist', 'siteblock.user.js');

http.createServer((req, res) => {
  if (req.url === '/siteblock.user.js') {
    fs.readFile(SCRIPT_PATH, (err, data) => {
      res.writeHead(err ? 500 : 200, {
        'Content-Type': 'application/javascript',
        'Cache-Control': 'no-cache'
      });
      res.end(err ? 'console.error("Script load error")' : data);
    });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`
      <!DOCTYPE html>
      <html><body>
        <h1>SiteBlocker Dev Server</h1>
        <p>Install userscript: <a href="/siteblock.user.js">siteblock.user.js</a></p>
      </body></html>
    `);
  }
}).listen(PORT, () => console.log(`Server running: http://localhost:${PORT}`));