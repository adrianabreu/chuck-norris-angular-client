import sentenceGetterService      from './sentence-getter.service.js';
import SentenceGetterController   from './sentence-getter.controller.js';
import sentenceGetterDirective    from './sentence-getter.directive.js';

import sentenceHistoricalService  from '../sentence-historical/sentence-historical.service.js';

export default angular
	.module('sentenceGetter',[])
	.factory('sentenceGetterService',sentenceGetterService)
	.service('sentenceHistoricalService', sentenceHistoricalService)
	.controller('SentenceGetterController',SentenceGetterController)
	.directive('sentenceGetter',sentenceGetterDirective)
	.name;