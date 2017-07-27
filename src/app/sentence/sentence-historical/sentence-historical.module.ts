import angular from 'angular';

import {SentenceHistoricalService} 		from './sentence-historical.service';
import {SentenceHistoricalComponent} 	from './sentence-historical.component';

// import sentenceHistoricalFilterService  
// 	from '../sentence-historical-filter/sentence-historical-filter.service';

export default angular
	.module('sentenceHistorical',[])
	.service('sentenceHistoricalService',SentenceHistoricalService)
	// .service('sentenceHistoricalFilterService', sentenceHistoricalFilterService)
	.component('sentenceHistorical',SentenceHistoricalComponent)
	.name;

	