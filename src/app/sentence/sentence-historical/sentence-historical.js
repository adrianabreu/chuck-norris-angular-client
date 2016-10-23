import sentenceHistoricalService 	from './sentence-historical.service.js';
import SentenceHistoricalController from './sentence-historical.controller.js';
import sentenceHistoricalDirective 	from './sentence-historical.directive.js';

import sentenceHistoricalFilterService  
	from '../sentence-historical-filter/sentence-historical-filter.service.js';

export default angular
	.module('sentenceHistorical',[])
	.service('sentenceHistoricalService',sentenceHistoricalService)
	.service('sentenceHistoricalFilterService', sentenceHistoricalFilterService)
	.controller('SentenceHistoricalController',SentenceHistoricalController)
	.directive('sentenceHistorical',sentenceHistoricalDirective)
	.name;