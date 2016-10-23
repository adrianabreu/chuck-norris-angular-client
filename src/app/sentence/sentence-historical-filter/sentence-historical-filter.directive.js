import angular from 'angular';

export default function sentenceHistoricalFilter(){	
	return {
		restrict : 'E',
		scope : {
			filters : '='
		},
		template: require('./sentence-historical-filter.tpl.html'),
		controller: 'SentenceHistoricalFilterController',
		controllerAs: 'sentenceHistoricalFilter'
	}
}