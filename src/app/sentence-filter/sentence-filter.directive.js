import angular from 'angular';

export default function sentenceFilter(){	
	return {
		restrict : 'E',
		scope : {
			filters : '='
		},
		template: require('./sentence-filter.tpl.html'),
		controller: 'SentenceFilterController',
		controllerAs: 'sentenceFilter'
	}
}