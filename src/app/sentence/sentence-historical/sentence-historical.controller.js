export default class SentenceHistoricalController {

  constructor($sce,sentenceHistoricalService) {
    this.$sce               = $sce;
	  this.historicalService  = sentenceHistoricalService;
  }

  getSentences(){
      return this.historicalService.get();
  }

  trustAsHtml(sentence) {
      return this.$sce.trustAsHtml(sentence);
  }
}

SentenceHistoricalController.$inject = [
	'$sce', 
	'sentenceHistoricalService'
];