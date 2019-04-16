(function () {
    'use strict';

    var courseManagement = angular.module('BlurAdmin.pages.course-management.create-new-course', [])
        .config(routeConfig);

    courseManagement.controller('createNewCourseCtrl', createNewCourseCtrl);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('course-management.create-new-course', {
                url: '/create-new-course',
                templateUrl: 'app/pages/course-management/create-new-course/create-new-course.html',
                controller: 'createNewCourseCtrl',
                controllerAs: 'vm',
                title: 'Create new course',
                sidebarMeta: {
                    order: 1,
                },
            });
    }

    /** @ngInject */
    function createNewCourseCtrl($scope) {

        $scope.courseDuration = 0;
        $scope.startDate = {};
        $scope.endDate = {};
        var currentDate = new Date();
        $scope.startDatePicker = {};
        $scope.endDatePicker = {};
        $scope.startDatePicker.opened = false;
        $scope.endDatePicker.opened = false;
        $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        $scope.format = $scope.formats[0];
        $scope.startDateOptions = {
            minDate: currentDate,
            showWeeks: false
        };
        $scope.endDateOptions = {
            minDate: currentDate,
            showWeeks: false
        };


        $scope.openDatePicker = function (dateType) {
            switch (dateType) {
                case "start":
                    $scope.startDateOptions.maxDate = $scope.endDate.dt;
                    $scope.startDatePicker.opened = !$scope.startDatePicker.opened;
                    break;
                case "end":
                    if ($scope.startDate.dt != undefined) {
                        $scope.endDateOptions.minDate = $scope.startDate.dt;
                    }
                    $scope.endDatePicker.opened = !$scope.endDatePicker.opened;
                    break;
                default:
                    break;
            }
        }

        var updateCourseDuration = $scope.$watchCollection('[startDate.dt, endDate.dt]', function (newValues) {
            if (newValues[0] != undefined && newValues[1] != undefined) {
                $scope.courseDuration = (Math.ceil(Math.abs(newValues[0] - newValues[1]) / (1000 * 3600 * 24)));
            }
        })
    }

})();
