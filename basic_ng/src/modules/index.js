import angular from 'angular';

// Add new modules here...
import HomePage from './home/home-page';
import AboutPage from './about/about-page';

// Initialize modules with states
const modules = angular.module('app.modules', [
  HomePage.name,
  AboutPage.name
]);

export default modules;
