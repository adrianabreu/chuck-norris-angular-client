import angular from 'angular';
import sentenceRun              from './sentence.run';
import sentenceConfig     		from './sentence.config';

import SentenceGetterModule		from './sentence-getter/sentence-getter.module';
import SentenceFilterModule 	from './sentence-filter/sentence-filter.module';
import SentenceHistoricalModule from './sentence-historical/sentence-historical.module';
import SentenceHistoricalFilterModule from './sentence-historical-filter/sentence-historical-filter.module'

const DEPENDENCIES = [
	SentenceGetterModule,
	SentenceFilterModule,
	SentenceHistoricalModule,
	SentenceHistoricalFilterModule
];

const MODULE_NAME  = 'sentence';

angular
	.module('sentence',DEPENDENCIES)
	.run(sentenceRun)
	.config(sentenceConfig);

export default MODULE_NAME;