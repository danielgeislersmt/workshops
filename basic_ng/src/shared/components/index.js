import angular from 'angular';

// Add new shared components here...
import HeaderComponent from './header/header.component';
import MenuComponent from './menu/menu.component';

// Initialize all shared components
const components = angular.module('app.shared.components', [
    HeaderComponent.name,
    MenuComponent.name,
]);

export default components;
