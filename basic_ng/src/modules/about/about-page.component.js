import angular from 'angular';
import router from 'angular-ui-router';

let routes = ['$stateProvider', ($stateProvider) => {
  $stateProvider
    .state('about', {
      url: '/about',
      template: '<ws-about-page></ws-about-page>'
    });
}];

let component = {
  template: require('./about-page.component.html')
};

export default angular.module('app.about', [ router ])
  .config(routes)
  .component('wsAboutPage', component);
