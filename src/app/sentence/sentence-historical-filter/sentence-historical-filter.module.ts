import { SentenceHistoricalFilterComponent }     from './sentence-historical-filter.component';
import { SentenceHistoricalFilterService }      from './sentence-historical-filter.service';
import angular from 'angular';

export default angular
	.module('sentenceHistoricalfilter',[])
	.service('sentenceHistoricalFilterService', SentenceHistoricalFilterService)
	.component('sentenceHistoricalFilter',SentenceHistoricalFilterComponent)
	.name;