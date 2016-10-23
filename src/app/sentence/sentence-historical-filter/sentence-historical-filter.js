import SentenceHistoricalFilterController    from './sentence-historical-filter.controller.js';
import sentenceHistoricalFilterDirective     from './sentence-historical-filter.directive.js';
import sentenceHistoricalFilterService       from './sentence-historical-filter.service.js';

import sentenceHistoricalService             from '../sentence-historical/sentence-historical.service.js';

export default angular
	.module('sentenceHistoricalfilter',[])
	.service('sentenceHistoricalFilterService', sentenceHistoricalFilterService)
	.service('sentenceHistoricalService',sentenceHistoricalService)
	.controller('SentenceHistoricalFilterController',SentenceHistoricalFilterController)
	.directive('sentenceHistoricalFilter',sentenceHistoricalFilterDirective)
	.name;