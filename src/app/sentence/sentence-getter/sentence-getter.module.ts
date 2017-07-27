import angular from 'angular';

import { SentenceGetterService }      from './sentence-getter.service';
import { SentenceGetterComponent }    from './sentence-getter.component';

import { SentenceFilterService }      	  from '../sentence-filter/sentence-filter.service';
import { SentenceHistoricalService }      from '../sentence-historical/sentence-historical.service';

const MODULE_NAME = 'sentenceGetter';
const DEPENDENCIES = [];

export default angular
	.module(MODULE_NAME,DEPENDENCIES)
	.factory('SentenceGetterService', SentenceGetterService)
	.service('sentenceHistoricalService', SentenceHistoricalService)
	.service('SentenceFilterService', SentenceFilterService)
	.component(SentenceGetterComponent.name,SentenceGetterComponent)
	.name;
