import angular from 'angular';

// Add new modules here...
import HomePage from './home/home-page.component';
import AboutPage from './about/about-page.component';
import FoodPage from './food/food-page.component';

// Initialize modules with states
const modules = angular.module('app.modules', [
  HomePage.name,
  FoodPage.name,
  AboutPage.name
]);

export default modules;
