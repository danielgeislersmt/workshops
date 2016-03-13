import angular from 'angular';
import router from 'angular-ui-router';

import FoodPageCtrl from './food-page.controller';

let routes = ['$stateProvider', ($stateProvider) => {
  $stateProvider
    .state('food', {
      url: '/food',
      template: '<ws-food-page></ws-food-page>'
    });
}];

let component = {
  template: require('./food-page.component.html'),
  controller: FoodPageCtrl
};

export default angular.module('app.food', [ router ])
  .config(routes)
  .component('wsFoodPage', component);
