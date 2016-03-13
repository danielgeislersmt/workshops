import angular from 'angular';
import router from 'angular-ui-router';

import MenuCtrl from './menu.controller';

const menuComponent = {
  restrict: 'E',
  template: require('./menu.component.html'),
  controller: MenuCtrl,
  controllerAs: 'menu',
  bindings: {}
};

export default angular.module('app.shared.menu', [router])
  .component('wsMenu', menuComponent);
