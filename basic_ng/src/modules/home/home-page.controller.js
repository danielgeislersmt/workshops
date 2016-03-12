export default class HomePageCtrl {

  /**
   * Constructor for HomePageCtrl
   */
  constructor($scope, $state, $window) {
    this.name = 'Guest!';
    this.description = 'SMT workshop';

    // sample injects into ES6 class
    console.log($scope);
    console.log($state);
    console.log($window);
  }

}

// Angular DI
HomePageCtrl.$inject = ['$scope', '$state', '$window'];
