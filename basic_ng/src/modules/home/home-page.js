import angular from 'angular';
import router from 'angular-ui-router';

import './home-page.css';

class HomePageCtrl {

  /**
   * Constructor for HomePageCtrl
   */
  constructor($scope, $state, $window) {
    this.name = 'YO!';

    // sample injects into ES6 class
    console.log($scope);
    console.log($state);
    console.log($window);
  }

}

// Angular DI
HomePageCtrl.$inject = ['$scope', '$state', '$window'];

/**
 * Decorate current module with routes.
 *
 * Very similar to @RouterConfig decorator in Angular2
 */
let homePageRoutes = ['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      template: '<home-page></home-page>'
    });
}];

/**
 * Decorate current module as component
 *
 * Very similar to @Component decorator in Angular2
 */
let homePageComponent = {
  restrict: 'E',
  template: require('./home-page.html'),
  controller: HomePageCtrl,
  controllerAs: 'home',
  bindings: {}
};

export default angular.module('app.home', [ router ])
  .config(homePageRoutes)
  .component('homePage', homePageComponent);
