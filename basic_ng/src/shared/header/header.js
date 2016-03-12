import angular from 'angular';
import router from 'angular-ui-router';

import HeaderCtrl from './controller/header';

const headerComponent = {
    restrict: 'E',
    template: require('./header.html'),
    controller: HeaderCtrl,
    controllerAs: 'header',
    bindings: {}
};

export default angular.module('app.shared.header', [ router ])
    .component('wsHeader', headerComponent);
