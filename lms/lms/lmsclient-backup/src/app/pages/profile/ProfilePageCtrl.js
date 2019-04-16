(function () {
  'use strict';

  angular.module('BlurAdmin.pages.profile')
    .controller('ProfilePageCtrl', ProfilePageCtrl);

  /** @ngInject */
  function ProfilePageCtrl($scope, $state) {
    if (sessionStorage.getItem('su') == undefined) {
      // location.href = 'auth.html';
      // location.href='#/Dashboard';
    }
    console.log(sessionStorage);
  }

})();
