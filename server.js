var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    var page = 'index.html';
    if (req.url != '/'){
        page = req.url+'.html';
    }

    fs.readFile('./public/'+page, function(err, data){
        var headStatus = 200;        
        if (err){
            var headStatus = 404;
            data = fs.readFileSync('../error/404.html');
        }
        res.writeHead(headStatus, {'Content-type': 'text/html; charset=utf-8'});
        res.write(data);
        res.end();
    });
    
});


server.listen(3030);