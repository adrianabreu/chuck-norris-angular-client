import sentenceFilterService from './sentence-filter.service.js';
import SentenceFilterController from './sentence-filter.controller.js';
import sentenceFilterDirective from './sentence-filter.directive.js';

export default angular
	.module('sentencefilter',[])
	.factory('sentenceFilterService',sentenceFilterService)
	.controller('SentenceFilterController',SentenceFilterController)
	.directive('sentenceFilter',sentenceFilterDirective)
	.name;