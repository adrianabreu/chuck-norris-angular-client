import angular from 'angular';
import { SentenceFilterController }    from './sentence-filter.controller';
import { SentenceFilterComponent }     from './sentence-filter.component';
import { SentenceFilterService }       from './sentence-filter.service';
import { sentenceFilterGetterService } from './sentence-filter-getter.service';

export default angular
	.module('sentencefilter',[])
	.factory('sentenceFilterGetterService',sentenceFilterGetterService)
	.service('SentenceFilterService', SentenceFilterService)
	.controller('SentenceFilterController',SentenceFilterController)
	.component('sentenceFilter', SentenceFilterComponent)
	.name;