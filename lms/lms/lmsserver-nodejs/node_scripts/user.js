var msg = require("./message");
var fs = require("fs");
var dataFile = "./data/user.json";
var util = require("./util");
exports.getUser = function () {
    console.log("getUser");
};

exports.getUsers = function () {
    console.log("getUsers");
};

exports.updateUser = function () {
    console.log("updateUser");
};

exports.deleteUser = function () {
    console.log("deleteUser");
};

exports.authentication = function (request, response, requestBody) {
    try {
        // msg.sendJson(request, response, JSON.stringify({"success":"success"}));    
        var data = JSON.parse(requestBody);
        // var data = requestBody;
        // console.log(data);
        if(data){
            var users = null;
            fs.readFile(dataFile, function(error,content){
                if(error){
                    // console.log("error1");
                    msg.show500(request,response,error);
                }else{
                    users = [];
                    if(content.length > 0){
                        // console.log("content: "+content);
                        users = JSON.parse(content);
                    }
                    // console.log(users);
                    var loggedInUser = util.checkObjectExists(users, data, "email", "password");
                    if(loggedInUser == undefined){
                        msg.sendJson(request, response, JSON.stringify({"loginResult":"fail"}));    
                    }else{
                        msg.sendJson(request, response, JSON.stringify({"loginResult":"success"}));    
                    }
                }
            });
        }else{
            throw new Error("Request data not valid.");
        }
    } catch (error) {
        // console.log("error2");
        msg.show500(request, response, error);
    }
};