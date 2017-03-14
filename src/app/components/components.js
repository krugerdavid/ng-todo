
import angular from 'angular'

import todo from './todo';

const components = angular
  .module('app.components', [todo])
  .name;

export default components; 