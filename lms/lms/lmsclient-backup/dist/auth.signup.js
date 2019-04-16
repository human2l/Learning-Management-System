'use strict'

var signup = angular.module('auth.signup',[]);

signup.controller('SignupCtrl', ['$scope', function($scope){
    $scope.submitting = false;
    $scope.onSubmit = function() {
        this.submitting = true;
        // console.log($scope);
        // if($scope.form.$valid){
            
        // }
    }
}]);




signup.directive('restrictTo', function() {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var re = RegExp(attrs.restrictTo);
            var exclude = /Backspace|Enter|Tab|Delete|Del|ArrowUp|Up|ArrowDown|Down|ArrowLeft|Left|ArrowRight|Right/;

            element[0].addEventListener('keydown', function(event) {
                if (!exclude.test(event.key) && !re.test(event.key)) {
                    event.preventDefault();
                }
            });
        }
    }
});

signup.directive('valueMatches', ['$parse', function ($parse) {
    return {
      require: 'ngModel',
        link: function (scope, elm, attrs, ngModel) {
          var originalModel = $parse(attrs.valueMatches),
              secondModel = $parse(attrs.ngModel);
          // Watch for changes to this input
          scope.$watch(attrs.ngModel, function (newValue) {
            ngModel.$setValidity(attrs.name, newValue === originalModel(scope));
          });
          // Watch for changes to the value-matches model's value
          scope.$watch(attrs.valueMatches, function (newValue) {
            ngModel.$setValidity(attrs.name, newValue === secondModel(scope));
          });
        }
      };
    }]);

    //TODO
    // 1.check email Exist
    // 2.pop up messagebox, send verification email
    // 3.password should be encrypted