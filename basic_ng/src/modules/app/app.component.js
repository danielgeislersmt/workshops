import angular from 'angular';

import './app.component.css';

let component = {
  template: require('./app.component.html')
};

let module = angular.module('app.main', [])
  .component('app', component);

export default module;
