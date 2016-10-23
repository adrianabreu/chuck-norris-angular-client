import SentenceFilterController    from './sentence-filter.controller.js';
import sentenceFilterDirective     from './sentence-filter.directive.js';
import sentenceFilterService       from './sentence-filter.service.js';
import sentenceFilterGetterService from './sentence-filter-getter.service.js';

export default angular
	.module('sentencefilter',[])
	.factory('sentenceFilterGetterService',sentenceFilterGetterService)
	.service('sentenceFilterService', sentenceFilterService)
	.controller('SentenceFilterController',SentenceFilterController)
	.directive('sentenceFilter',sentenceFilterDirective)
	.name;