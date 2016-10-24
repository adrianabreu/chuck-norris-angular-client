import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/app.css';
import '../style/bootstrap.theme.min.css';

import lodash     from 'lodash';
import angular    from 'angular';
import ngRoute    from 'angular-route';
import ngResource from 'angular-resource';
import ngStorage  from 'ngstorage';

import sentence   from './sentence/sentence.js';
import appConfig  from './app.config.js';
import appRun     from './app.run.js';

const MODULE_NAME  = 'chuck';
const DEPENDENCIES = [
  ngRoute,
  ngResource,
  ngStorage.name,
  sentence
];

angular
  .module(MODULE_NAME, DEPENDENCIES)
  .run(appRun)
  .config(appConfig);

export default MODULE_NAME;