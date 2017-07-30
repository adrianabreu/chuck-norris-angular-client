import { NgModule } from 'angular-ts-decorators';

import { SentenceGetterComponent } from './sentence-getter/sentence-getter.component';
import { SentenceFilterComponent } from './sentence-filter/sentence-filter.component';
import { SentenceHistoricalComponent } from './sentence-historical/sentence-historical.component';
import { SentenceHistoricalFilterComponent } from './sentence-historical-filter/sentence-historical-filter.component';

import { SentenceFilterService } from './sentence-filter.service'; 
import { SentenceGetterService } from './sentence-getter.service';
import { SentenceHistoricalService } from './sentence-historical.service';
import { SentenceHistoricalFilterService } from './sentence-historical-filter.service';

import { StateProvider } from '@uirouter/angularjs';

@NgModule({
	id: SentenceModule.name,
	declarations: [
		SentenceGetterComponent,
		SentenceFilterComponent,
		SentenceHistoricalComponent,
		SentenceHistoricalFilterComponent,
	],
	providers: [
		SentenceGetterService,
		SentenceFilterService,
		SentenceHistoricalService,
		SentenceHistoricalFilterService,
	],
	exports: []
})
export class SentenceModule {
	public static config($stateProvider: StateProvider) {
		$stateProvider.state({
			name: 'sentence',
			url: '/sentence',
			template: require('./sentence.html')
		});
	}
}
