export default class SentenceHistoricalController {

  constructor($sce, sentenceHistoricalService, sentenceHistoricalFilterService) {
    this.$sce                    = $sce;
    this.historicalService       = sentenceHistoricalService;
    this.historicalFilterService = sentenceHistoricalFilterService;
  }

  trustAsHtml(sentence) {
      return this.$sce.trustAsHtml(sentence);
  }

  getSentences(){
      return this.historicalService.get();
  }  

  categoryIsSelected(category){
    return this.historicalFilterService.isActive(category);
  }

  categoryFilterIsEmpty(){
    return this.historicalFilterService.isEmpty();
  }

}

SentenceHistoricalController.$inject = [
	'$sce',
	'sentenceHistoricalService',
  'sentenceHistoricalFilterService'
];