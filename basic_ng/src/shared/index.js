import angular from 'angular';

// Add new shared modules here...
import Header from './components/header/header.component';
import Menu from './components/menu/menu.component';

// Initialize modules with states
const modules = angular.module('app.shared', [
    Header.name,
    Menu.name
]);

export default modules;
