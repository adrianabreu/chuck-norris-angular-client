import sentenceRun              from './sentence.run.js';
import sentenceConfig     		from './sentence.config.js';
import SentenceController 		from './sentence.controller.js';

import SentenceGetterModule		from './sentence-getter/sentence-getter.module';
import SentenceFilterModule 	from './sentence-filter/sentence-filter.module';
import sentenceHistorical 		from './sentence-historical/sentence-historical.js';
import sentenceHistoricalFilter from './sentence-historical-filter/sentence-historical-filter.js'

const DEPENDENCIES = [
	SentenceGetterModule,
	SentenceFilterModule,
	sentenceHistorical,
	sentenceHistoricalFilter
];

const MODULE_NAME  = 'sentence';

angular
	.module('sentence',DEPENDENCIES)
	.controller('SentenceController',SentenceController)
	.run(sentenceRun)
	.config(sentenceConfig);

export default MODULE_NAME;