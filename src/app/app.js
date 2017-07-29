import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/app.css';
import '../style/bootstrap.theme.min.css';

import lodash     from 'lodash';
import angular    from 'angular';
import ngRoute    from 'angular-route';
import ngResource from 'angular-resource';
import ngStorage  from 'ngstorage';

import uiRouterCore      from '@uirouter/core';
import uiRouterAngularJs from '@uirouter/angularjs';

import sentenceModule   from './sentence/sentence.module';
import appConfig  from './app.config';
import appRun     from './app.run';


const MODULE_NAME  = 'chuck';
const DEPENDENCIES = [
  ngRoute,
  ngResource,
  ngStorage.name,
  'ui.router',
  sentenceModule
];

angular
  .module(MODULE_NAME, DEPENDENCIES)
  .run(appRun)
  .config(appConfig);

export default MODULE_NAME;