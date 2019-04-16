'use strict'

var signin = angular.module('auth.signin', []);

signin.controller('SigninCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.user = [];
    $scope.state = 'normal';
    $scope.submitting = false;
    $scope.loginfailed = false;
    $scope.onSubmit = function () {
        $scope.submitting = true;
        console.log($scope);
        authentication();
    }
    $scope.onForgotPassword = function () {
        console.log("forgot");
        $scope.state = "forgot";
    }

    var authentication = function () {
        // console.log($scope.user);
        var loginUser = { email: $scope.user.name, password: $scope.user.pwd };
        // var url = 'http://Localhost:8888/users';
        // $http.get(url).then(function successCallback(response) {
        //     console.log(response.data);
        // }, function errorCallback(response) {
        //     console.log("shi bai!");
        // });


        var url = 'http://Localhost:8888';
        var config = {
            headers:
                { 'Content-Type': 'application/x-www-form-urlencoded' }
        };
        $http.post(url + '/authentication', loginUser, config).then(function successCallback(response) {
            console.log(response.data);
            if(response.data.loginResult == "fail"){
                console.log("failed");
                $scope.loginfailed = true;
            }else{
                //todo direct to index.html
            }
        }, function errorCallback(response) {
            console.log("login failed");
        }
        )
    }
}]);




//TODO
// 1.encrypting the password
// 2.receive server side response
// 3.after signout, user inputs should be deleted