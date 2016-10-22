// npm install --save angular-resource
// npm install --save angular-route
// npm install --save bootstrap 

import angular    from 'angular';
import ngRoute    from 'angular-route';
import ngResource from 'angular-resource';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/app.css';

import sentenceGetter from './sentence-getter/sentence-getter.js';

const MODULE_NAME  = 'chuck';
const DEPENDENCIES = [
  ngRoute,
  ngResource,
  sentenceGetter
];

angular
  .module(MODULE_NAME, DEPENDENCIES)
  // .controller('SentenceGetterController',SentenceGetterController)
  .run(function(){
    // console.log(this);
  })
  .config(function($httpProvider,$logProvider,$routeProvider){
    // console.log($routeProvider);
    // $routeProvider
    //   .when('/...', {
    //     templateUrl: '',
    //     controller: ''
    //   })
  });

export default MODULE_NAME;