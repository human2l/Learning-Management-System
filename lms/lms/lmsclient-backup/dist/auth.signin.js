'use strict'

var signin = angular.module('auth.signin',[]);

signin.controller('SigninCtrl', ['$scope', function($scope){
    $scope.state = 'normal';
    $scope.submitting = false;
    $scope.onSubmit = function(){
        $scope.submitting = true;
    }
    $scope.onForgotPassword = function(){
        console.log("forgot");
        $scope.state = "forgot";
    }
}]);



//TODO
// 1.encrypting the password
// 2.receive server side response
// 3.after signout, user inputs should be deleted