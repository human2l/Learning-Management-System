var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');
var settings = require('./node_scripts/settings');
var msg = require("./node_scripts/message");
var user = require("./node_scripts/user");

http.createServer(function (request, response) {
    var filePath = request.url;
    var dataFile = "./data/user.json";
    console.log("request method: " + request.method);
    switch (request.method) {
        case "GET":
            console.log("get request");
            console.log(filePath);

            if (filePath === "/users") {
                console.log("lol");
                // msg.show200(request, response,"users!!!","text/plain");
                fs.readFile(dataFile, function (error, content) {
                    if (error) {
                        console.log("error");
                        msg.show500(request, response, error);
                    } else {
                        console.log("sendJson");
                        msg.sendJson(request, response, content);
                    }
                })
            } else if (1 == 1) {

            } else {
                staticResponse(request, response, filePath);
            }
            break;
        case "POST":

            if (filePath === "/authentication") {
                var reqBody = '';
                request.on("data", function (data) {
                    reqBody += data;
                });
                request.on("end", function () {
                    console.log("request body: " + reqBody);
                    user.authentication(request, response, reqBody);
                });

            }
            break;
        case "PUT":

            break;
        case "DELETE":

            break;
        default:
            break;
    }
}).listen(settings.port, function () {
    console.log('Server running at localhost:' + settings.port);
});

var staticResponse = function (request, response, filePath) {
    var extname = path.extname(filePath);
    var contentType = 'text/html';

    if (filePath === '/') {

        filePath = '../lmsclient/src/index.html';
    } else {
        switch (extname) {
            case '.js':
                contentType = 'text/javascript';
                break;
            case '.css':
                contentType = 'text/css';
                break;
            default:
                contentType = "text/plain";
        }
        filePath = "." + filePath;
    }
    console.log('[request] ' + filePath);

    fs.readFile(filePath, function (error, content) {
        if (error) {
            console.log(error);
            msg.show404(request, response, error);
        } else {
            msg.show200(request, response, content, contentType);
        }
    });
};