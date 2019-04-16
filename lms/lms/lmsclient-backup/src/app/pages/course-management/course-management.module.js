(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.course-management', [
      'BlurAdmin.pages.course-management.create-new-course',
      'BlurAdmin.pages.course-management.courses',      
    ])
        .config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider) {
      $stateProvider
          .state('course-management', {
            url: '/course-management',
            template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
            abstract: true,
            title: 'Course management',
            sidebarMeta: {
              icon: 'ion-android-laptop',
              order: 200,
            },
          });
    }
  
  })();
  