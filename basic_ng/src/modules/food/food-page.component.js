import angular from 'angular';
import router from 'angular-ui-router';

import FoodPageCtrl from './food-page.controller';

const routes = ['$stateProvider', ($stateProvider) => {
  $stateProvider

    // Main view
    .state('food', {
      abstract: true,
      url: '/food',
      template: '<ws-food-page></ws-food-page>'
    })

    // List sub view
    .state('food.list', {
        url: '/',
        template: require('./list/food-list.component.html')
    })

    // Form sub view
    .state('food.add', {
        url: '/add',
        template: require('./form/food-form.component.html')
    });
}];

const component = {
  template: require('./food-page.component.html'),
  controller: FoodPageCtrl,
  controllerAs: 'foodCtrl'
};

export default angular.module('app.food', [ 'ngMessages', router ])
  .config(routes)
  .component('wsFoodPage', component)
