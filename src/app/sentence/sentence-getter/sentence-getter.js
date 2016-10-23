import sentenceGetterService      from './sentence-getter.service.js';
import SentenceGetterController   from './sentence-getter.controller.js';
import sentenceGetterDirective    from './sentence-getter.directive.js';

import sentenceFilterService      from '../sentence-filter/sentence-filter.service.js';
import sentenceHistoricalService  from '../sentence-historical/sentence-historical.service.js';

export default angular
	.module('sentenceGetter',[])
	.factory('sentenceGetterService',sentenceGetterService)
	.service('sentenceHistoricalService', sentenceHistoricalService)
	.service('sentenceFilterService', sentenceFilterService)
	.controller('SentenceGetterController',SentenceGetterController)
	.directive('sentenceGetter',sentenceGetterDirective)
	.name;
