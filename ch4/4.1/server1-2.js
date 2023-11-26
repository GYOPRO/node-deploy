const http = require('http');

http.createServer((rep, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Server 8080!</p>');
})
    .listen(8080, () => {
        console.log('8080포트에서 서버 대기 중 입니다.');
    });

http.createServer((rep, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Server 8081!</p>');
})
    .listen(8081, () => {
        console.log('8081포트에서 서버 대기 중 입니다.');
    })

