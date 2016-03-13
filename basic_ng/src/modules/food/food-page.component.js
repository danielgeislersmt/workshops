import angular from 'angular';
import router from 'angular-ui-router';

import FoodPageCtrl from './food-page.controller';

const routes = ['$stateProvider', ($stateProvider) => {
  $stateProvider
    .state('food', {
      url: '/food',
      template: '<ws-food-page></ws-food-page>'
    })
    //FIXME: substate is not working
    .state('foodAdd', {
        url: '/add',
        template: require('./food-form.component.html')
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
