// npm install --save angular-resource
// npm install --save angular-route
// npm install --save bootstrap 

import angular    from 'angular';
import ngRoute    from 'angular-route';
import ngResource from 'angular-resource';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/app.css';

// import sentenceGetter from './sentence-getter/sentence-getter.js';
// import sentenceFilter from './sentence-filter/sentence-filter.js';
import sentence from './sentence/sentence.js';

const MODULE_NAME  = 'chuck';
const DEPENDENCIES = [
  ngRoute,
  ngResource,
  sentence
];

angular
  .module(MODULE_NAME, DEPENDENCIES)
  .run(function(){
    // console.log(this);
  })
  .config(function($logProvider,$routeProvider){
    // todo ... env variable
    $logProvider.debugEnabled(!true);    
    // initial redirection
    $routeProvider
      .otherwise({
        redirectTo: '/sentence'
      });
  });

export default MODULE_NAME;