import angular from 'angular';
import router from 'angular-ui-router';

import HeaderCtrl from './header.controller';

const headerComponent = {
  restrict: 'E',
  template: require('./header.component.html'),
  controller: HeaderCtrl,
  controllerAs: 'header',
  bindings: {}
};

export default angular.module('app.shared.header', [ router ])
  .component('wsHeader', headerComponent);
