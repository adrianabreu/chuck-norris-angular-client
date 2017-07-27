export class SentenceHistoricalController {

    public static $inject = [
        '$sce',
        'sentenceHistoricalService',
        'sentenceHistoricalFilterService'
    ];

  constructor(
    private $sce,
    private sentenceHistoricalService,
    private sentenceHistoricalFilterService
  ) {
    
  }

  trustAsHtml(sentence) {
      return this.$sce.trustAsHtml(sentence);
  }

  getSentences(){
      return this.sentenceHistoricalService.get();
  }  

  categoryIsSelected(category){
    return this.sentenceHistoricalFilterService.isActive(category);
  }

  categoryFilterIsEmpty(){
    return this.sentenceHistoricalFilterService.isEmpty();
  }

  clearCache() {
    this.sentenceHistoricalService.clearCache();
  }
}