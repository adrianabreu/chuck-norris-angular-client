import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/app.css';
import '../style/bootstrap.theme.min.css';

import angular    from 'angular';
import ngRoute    from 'angular-route';
import ngResource from 'angular-resource';

import sentence  from './sentence/sentence.js';
import appConfig from './app.config.js'

const MODULE_NAME  = 'chuck';
const DEPENDENCIES = [
  ngRoute,
  ngResource,
  sentence
];

angular
  .module(MODULE_NAME, DEPENDENCIES)
  .run(function(){
    console.log(this);
  })
  .config(appConfig);

export default MODULE_NAME;