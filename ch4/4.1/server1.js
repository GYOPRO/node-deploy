const http = require('http');

http.createServer((rep, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    for(var i = 0; i < 100 ; i++){
        res.write('<h1>안녕 콩아!</h1>');
    } 
    res.end('<p>Hello Server!</p>');
})
    .listen(8080, () => {
        console.log('8080 포트에서 서버 대기 중입니다.');
    })