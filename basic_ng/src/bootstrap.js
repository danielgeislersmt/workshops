import angular from 'angular';
import router from 'angular-ui-router';
import 'angular-material';

import modules from './modules';
import components from './shared/components';
import services from './shared/services';

angular.module('app', [ 'ngMaterial', router, modules.name, components.name, services.name ])
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
