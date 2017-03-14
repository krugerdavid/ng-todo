import angular from 'angular'  

import { HeaderComponent } from './header/header.component'

const common = angular  
  .module('app.common', [])
  .component('headerApp', HeaderComponent)
  .name;

export default common;  