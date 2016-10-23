import sentenceRun              from './sentence.run.js';
import sentenceConfig     		from './sentence.config.js';
import SentenceController 		from './sentence.controller.js';

import sentenceGetter     		from './sentence-getter/sentence-getter.js';
import sentenceFilter 	  		from './sentence-filter/sentence-filter.js';
import sentenceHistorical 		from './sentence-historical/sentence-historical.js';
import sentenceHistoricalFilter from './sentence-historical-filter/sentence-historical-filter.js'

const DEPENDENCIES = [sentenceGetter,sentenceFilter,sentenceHistorical,sentenceHistoricalFilter];
const MODULE_NAME  = 'sentence';

angular
	.module('sentence',DEPENDENCIES)
	.controller('SentenceController',SentenceController)
	.run(sentenceRun)
	.config(sentenceConfig);

export default MODULE_NAME;