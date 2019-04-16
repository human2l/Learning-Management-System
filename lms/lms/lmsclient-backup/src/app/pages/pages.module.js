(function () {
  'use strict';

  angular.module('BlurAdmin.pages', [
    'ui.router',

    'BlurAdmin.pages.profile',
    'BlurAdmin.pages.dashboard',
    // 'BlurAdmin.pages.ui',
    // 'BlurAdmin.pages.components',
    // 'BlurAdmin.pages.form',
    // 'BlurAdmin.pages.tables',
    // 'BlurAdmin.pages.charts',
    // 'BlurAdmin.pages.maps',
    'BlurAdmin.pages.course-management',

  ]).config(routeConfig);

  /** @ngInject */
  function routeConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise('/profile');
  }

})();
