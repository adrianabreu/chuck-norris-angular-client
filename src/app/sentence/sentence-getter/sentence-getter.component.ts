import { Component } from 'angular-ts-decorators';
import { SentenceGetterService } from '../sentence-getter.service';
import { SentenceFilterService } from '../sentence-filter.service';
import { SentenceHistoricalService } from '../sentence-historical.service';

import { IScope } from 'angular';

@Component({
	selector: 'sentence-getter',
	template: require('./sentence-getter.html')
})
export class SentenceGetterComponent {

	private sentenceRequested: boolean;
	private sentence: any;

	public static $inject: string[] = [
		'$sce',
		'$scope',
		SentenceGetterService.name,
		SentenceFilterService.name,
  	SentenceHistoricalService.name
	];

	constructor(
		private $sce,
		private $scope: IScope,
		private sentenceGetterService: SentenceGetterService,
		private sentenceFilterService: SentenceFilterService,
		private sentenceHistoricalService: SentenceHistoricalService
	) {
		this.sentenceRequested = false;
		this.sentence = $sce.trustAsHtml('let\'s get it');		
	}

	get() {
		this.sentenceRequested = true;
		this.sentenceGetterService
			.getRandomJoke(this.sentenceFilterService.getActiveFilters())
			.then(response => {
				let sentence = response.data.value;				
				this.sentenceHistoricalService.add(sentence);
				this.sentenceHistoricalService.addCategory(response.data.value.categories);
				this.sentence = this.$sce.trustAsHtml(sentence.joke);
			});
	}
};

