"use strict"
var http = require("http");
var fs = require("fs");
var url = require("url");
var querystring = require("querystring");

const PORT = process.argv[2];

try{
  http.createServer(function(request,response){
    var pathname = url.parse(request.url).pathname;
    var sPath = pathname.slice(1, pathname.length);
    var  sUrl = url.parse(request.url);
    console.log(sPath);

    if (sPath==""){
      response.writeHeader(200, {'Content-Type' :'text/html'});
      response.write("http//localhost:8000/", 'utf8');
      response.end();
      return;
    }

    if (sPath=="kill"){
      response.writeHeader(200, {'Content-Type' :'text/html'});
      response.write("The server will stop now.", 'utf8',process.exit,0);
      response.end();
      return;
    }
    console.log("test");
    console.log(sPath.slice(0,4))
    if (sPath.slice(0,4) == "www/"){
      if (sPath.includes("/../")){
        response.writeHeader(403, {"Content-Type":"text/html"});
        response.write('ERROR 403 Forbidden');
        response.end();
        return;
    }
    sPath = sPath.slice(6);
    console.log("test2");
    console.log(sPath)
      if (!fs.existsSync(sPath)){
          response.writeHeader(404, {"Content-Type":"text/html"});
          response.write('ERROR 404 File Not Found');
          response.end();
          return;

      }

      else {
        var header = {};;
        if (sPath.slice(-5)=='.html'){
          header["Content-Type"] = "text/html";
        }

        if (sPath.slice(-4)=='.css'){
          header["Content-Type"] = "text/css";
        }

        if (sPath.slice(-3)=='.js'){
          header["Content-Type"] = "application/javascript";
        }

        if (sPath.slice(-4)=='.jpg' || sPath.slice(-5) == "jpeg"){
          header["Content-Type"] = "image/jpeg";
        }

        if (sPath.slice(-4)=='.png'){
          header["Content-Type"] = "image/png";
        }

        fs.readFile(sPath, function(error, data) {
          if (error){
            response.writeHeader(200 , {"Content-Type": "text/plain, charset= UTF-8"});
            response.write(error + "\n");
            response.end();
          }
          else {
            response.writeHeader(200, header);
            response.write(data);
            response.end();
        }});

      }
       return;
    }
    if (sPath =="bonjour"){
      var query = querystring.parse(sUrl.query);
      console.log(query);
      console.log(query.name);
      console.log(query.user);
      console.log(querystring.unescape(sUrl.query))
      console.log(querystring.unescape(sUrl.query).user)
      response.writeHead(200,{'Content-type':'text/html; charset= UTF-8'});
      response.end('bonjour '+ query.user);
      return;
    }

    if (sPath =="coucou"){
      var query = querystring.parse(sUrl.query);
      console.log("dernier test");
      console.log(query);
      console.log(sUrl.query);
      response.writeHead(500,{'Content-type':'text/html; charset= UTF-8'});
      response.end('coucou ' + query.name + ', the following users have already visited this page: ');
      return;
    }

    if (sPath =="clear"){
      var query = querystring.parse(sUrl.query);
      response.writeHead(200,{'Content-type':'text/html; charset= UTF-8'});
      response.end('coucou' + query.user +' , the following users have already visited this page.');
      return;
    }
  }).listen(PORT);
console.log("Server Running on 8000");

}catch(error){
  console.error(error);
}
