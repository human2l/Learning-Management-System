(function () {
    'use strict';

    var courseManagement = angular.module('BlurAdmin.pages.course-management.courses', [])
        .config(routeConfig);

    courseManagement.controller('coursesCtrl', coursesCtrl);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('course-management.courses', {
                url: '/courses',
                templateUrl: 'app/pages/course-management/courses/courses.html',
                controller: 'coursesCtrl',
                controllerAs: 'vm',
                title: 'Courses',
                sidebarMeta: {
                    order: 0,
                },
            });
    }

    /** @ngInject */
    function coursesCtrl($scope) {
        var colorType = [
            "primary",
            "success",
            "info",
            "warning",
            "danger"
        ];
        $scope.dummies = {};
        $scope.dummies.dummy1 = {
            title: "dummy1title",
            content: "dummy1content adsfasfasdfasd fasdfadsfadsfh kjadsfhkjad sfjadsjflklasdjflkasjdf asdlkfklasdjfklasjdlkfadslkf asdlkfjlaksdfjlkasdjkfl asdlfkjasldkf jlkasd ",
        };
        $scope.dummies.dummy2 = {
            title: "dummy2title",
            content: "dummy2content adsfasfasdfasd fasdfadsfadsfh kjadsfhkjad sfjadsjflklasdjflkasjdf asdlkfklasdjfklasjdlkfadslkf asdlkfjlaksdfjlkasdjkfl asdlfkjasldkf jlkasd ",
        };
        $scope.dummies.dummy3 = {
            title: "dummy3title",
            content: "dummy3content adsfasfasdfasd fasdfadsfadsfh kjadsfhkjad sfjadsjflklasdjflkasjdf asdlkfklasdjfklasjdlkfadslkf asdlkfjlaksdfjlkasdjkfl asdlfkjasldkf jlkasd ",
        };
        $scope.dummies.dummy4 = {
            title: "dummy4title",
            content: "dummy4content adsfasfasdfasd fasdfadsfadsfh kjadsfhkjad sfjadsjflklasdjflkasjdf asdlkfklasdjfklasjdlkfadslkf asdlkfjlaksdfjlkasdjkfl asdlfkjasldkf jlkasd ",
        };
        $scope.dummies.dummy5 = {
            title: "dummy5title",
            content: "dummy5content adsfasfasdfasd fasdfadsfadsfh kjadsfhkjad sfjadsjflklasdjflkasjdf asdlkfklasdjfklasjdlkfadslkf asdlkfjlaksdfjlkasdjkfl asdlfkjasldkf jlkasd ",
        };
        $scope.dummies.dummy6 = {
            title: "dummy6title",
            content: "dummy6content adsfasfasdfasd fasdfadsfadsfh kjadsfhkjad sfjadsjflklasdjflkasjdf asdlkfklasdjfklasjdlkfadslkf asdlkfjlaksdfjlkasdjkfl asdlfkjasldkf jlkasd ",
        }; 
        $scope.dummies.dummy7 = {
            title: "dummy7title",
            content: "dummy7content adsfasfasdfasd fasdfadsfadsfh kjadsfhkjad sfjadsjflklasdjflkasjdf asdlkfklasdjfklasjdlkfadslkf asdlkfjlaksdfjlkasdjkfl asdlfkjasldkf jlkasd ",
        }; 

        $scope.renderPanelColor = function(index){
            return "panel-"+colorType[index%5];
        }
    }

})();
