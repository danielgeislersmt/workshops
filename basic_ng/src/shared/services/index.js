import angular from 'angular';

// Add new shared services here...
import FoodService from './food/food.service';

// Initialize shared services
const services = angular.module('app.shared.services', [])
  .service('FoodService', FoodService);

export default services;
