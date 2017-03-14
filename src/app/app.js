// /app/app.js
import 'bootstrap/dist/css/bootstrap.css';
import '../style/app.scss';

import angular from 'angular'  
import uiRouter from 'angular-ui-router'
import localForage from 'angular-localforage'

import common from './common/common'
import components from './components/components'
import { AppComponent } from './app.component'

const root = angular  
  .module('angularApp', [
    uiRouter, 
    common,
    components,
    localForage
  ])
  .component('app', AppComponent)
  .name;

export default root;