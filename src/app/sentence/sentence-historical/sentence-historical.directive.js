import angular from 'angular';

export default function sentenceHistorical(){	
	return {
		restrict : 'E',
		template: require('./sentence-historical.tpl.html'),
		controller: 'SentenceHistoricalController',
		controllerAs: 'sentenceHistorical'
	}
}