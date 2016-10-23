import sentenceConfig     from './sentence.config.js';
import SentenceController from './sentence.controller.js';
import sentenceGetter     from './sentence-getter/sentence-getter.js';
import sentenceFilter 	  from './sentence-filter/sentence-filter.js';

const DEPENDENCIES = [sentenceGetter,sentenceFilter];
const MODULE_NAME  = 'sentence';

angular
	.module('sentence',DEPENDENCIES)
	.controller('SentenceController',SentenceController)
	.config(sentenceConfig);

export default MODULE_NAME;