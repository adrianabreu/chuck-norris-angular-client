import sentenceGetterService from './sentence-getter.service.js';
import SentenceGetterController from './sentence-getter.controller.js';
import sentenceGetterDirective from './sentence-getter.directive.js';

export default angular
	.module('sentenceGetter',[])
	.factory('sentenceGetterService',sentenceGetterService)
	.controller('SentenceGetterController',SentenceGetterController)
	.directive('sentenceGetter',sentenceGetterDirective)
	.name;