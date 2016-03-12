import angular from 'angular';

// Add new shared modules here...
import Header from './header/header';
import Menu from './menu/menu';

// Initialize modules with states
const modules = angular.module('app.shared', [
    Header.name,
    Menu.name
]);

export default modules;
