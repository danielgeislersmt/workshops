import angular from 'angular';

// Add new shared services here...
import FoodService from './food/food.service';
import BasketService from './basket/basket.service';

// Initialize shared services
const services = angular.module('app.shared.services', [])
  .service('FoodService', FoodService)
  .service('BasketService', BasketService);

export default services;
