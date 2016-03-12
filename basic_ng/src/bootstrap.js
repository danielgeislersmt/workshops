import angular from 'angular';
import router from 'angular-ui-router';

import modules from './modules/modules';

angular.module('app', [ router, modules.name ])
  .config(['$locationProvider', ($locationProvider) => {
    $locationProvider.html5Mode(true);
  }])
  .run();
