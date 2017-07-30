// import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/styles.scss';

import lodash     from 'lodash';
import angular    from 'angular';
import ngRoute    from 'angular-route';
import ngResource from 'angular-resource';
import ngStorage  from 'ngstorage';

// TODO : search module name
import '@uirouter/angularjs';
import { SentenceModule }   from './sentence/sentence.module';

import appConfig  from './app.config';
import appRun     from './app.run';


const MODULE_NAME  = 'chuck';
const DEPENDENCIES = [
  ngRoute,
  ngResource,
  ngStorage.name,
  'ui.router',
  SentenceModule.name
];

angular
  .module(MODULE_NAME, DEPENDENCIES)  
  .run(appRun)
  .config(appConfig);

export default MODULE_NAME;