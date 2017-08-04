import { Component } from 'angular-ts-decorators';
import { SentenceHistoricalService } from '../sentence-historical.service';
import { SentenceHistoricalFilterService } from '../sentence-historical-filter.service';

@Component({
   selector: 'sentenceHistorical',
   template: require('./sentence-historical.html')
})
export class SentenceHistoricalComponent {
   public static $inject = [
      '$sce',
      'SentenceHistoricalService',
      'SentenceHistoricalFilterService'
   ];

   constructor(
      private $sce,
      private sentenceHistoricalService: SentenceHistoricalService,
      private sentenceHistoricalFilterService: SentenceHistoricalFilterService,
   ) {

   }

   trustAsHtml(sentence) {
      return this.$sce.trustAsHtml(sentence);
   }

   getSentences() {
      return this.sentenceHistoricalService.get();
   }

   categoryIsSelected(category) {
      return this.sentenceHistoricalFilterService.isActive(category);
   }

   categoryFilterIsEmpty() {
      return this.sentenceHistoricalFilterService.isEmpty();
   }

   clearCache() {
      this.sentenceHistoricalService.clearCache();
   }
}