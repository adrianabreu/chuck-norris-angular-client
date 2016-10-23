import sentenceHistoricalService from './sentence-historical.service.js';
import SentenceHistoricalController from './sentence-historical.controller.js';
import sentenceHistoricalDirective from './sentence-historical.directive.js';

export default angular
	.module('sentenceHistorical',[])
	.service('sentenceHistoricalService',sentenceHistoricalService)
	.controller('SentenceHistoricalController',SentenceHistoricalController)
	.directive('sentenceHistorical',sentenceHistoricalDirective)
	.name;