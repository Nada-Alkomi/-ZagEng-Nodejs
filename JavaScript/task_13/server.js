const http = require('http');

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });

        res.end(`
            <h1>personal intro page</h1>
            <p>name: nada</p>
            <p>field: computer science</p>
            <p>goal: become a backend developer</p>
            <p>message: keep going, you're doing great</p>
            <a href="/api">go to api</a>
        `);
    }

    else if (req.url === '/api') {
        res.writeHead(200, { 'Content-Type': 'application/json' });

        const data = {
            name: "nada",
            field: "computer science",
            goal: "become a backend developer",
            message: "keep going, you're doing great"
        };

        res.end(JSON.stringify(data));
    }

    // route 3: not found
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });

        res.end('<h1>404 not found</h1>');
    }

});

server.listen(3000, () => {
    console.log('server running on http://localhost:3000');
});