import angular from 'angular';
import router from 'angular-ui-router';

import 'angular-material';

import modules from './modules/modules';

angular.module('app', [ 'ngMaterial', router, modules.name ])
  .config(['$locationProvider', '$mdIconProvider', '$mdThemingProvider', ($locationProvider, $mdIconProvider, $mdThemingProvider) => {
    $locationProvider.html5Mode(true);

    $mdThemingProvider.theme('smt');
    $mdThemingProvider.setDefaultTheme('smt');
    $mdIconProvider.defaultFontSet('material-icons');
  }])
  .run();
