import angular from 'angular';
import router from 'angular-ui-router';

class AboutPageCtrl {

  /**
   * Constructor for aboutPageCtrl
   */
  constructor() {
    this.name = 'YO!';
  }

}

let aboutPageRoutes = ['$stateProvider', ($stateProvider) => {
  $stateProvider
    .state('about', {
      url: '/about',
      template: '<about-page></about-page>'
    });
}];

let aboutPageComponent = {
  template: require('./about-page.html'),
  controller: AboutPageCtrl,
  controllerAs: 'about'
};

export default angular.module('app.about', [ router ])
  .config(aboutPageRoutes)
  .component('aboutPage', aboutPageComponent);
