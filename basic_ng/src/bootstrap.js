import angular from 'angular';
import router from 'angular-ui-router';
import 'angular-material';

import modules from './modules';
import shared from './shared';

angular.module('app', [ 'ngMaterial', router, modules.name, shared.name ])
  .config([
    '$locationProvider',
    '$mdIconProvider',
    '$mdThemingProvider',
    ($locationProvider, $mdIconProvider, $mdThemingProvider) => {
      $locationProvider.html5Mode(true);

      $mdThemingProvider.theme('smt');
      $mdThemingProvider.setDefaultTheme('smt');
      $mdIconProvider.defaultFontSet('material-icons');
    }
  ])
  .run();
