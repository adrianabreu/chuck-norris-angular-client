export class SentenceHistoricalFilterController {

  public static $inject = [
        '$log',
        'sentenceHistoricalService',
        'sentenceHistoricalFilterService'
  ];  

  constructor(
      private $log,
      private sentenceHistoricalService, 
      private sentenceHistoricalFilterService
  ) {}  

  getHistoricalCategories(){
  	return this.sentenceHistoricalService.getCategories();
  }

  toogleFilter(pFilter) {
      this.$log.debug('SentenceHistoricalFilterController.addFilter:'+ pFilter);
      this.sentenceHistoricalFilterService.toogle(pFilter);
  }

  isActiveFilter(pFilter: string) {
      return this.sentenceHistoricalFilterService.isActiveClass(pFilter);
  }

  clearFilter() {
      this.sentenceHistoricalFilterService.clear();
  }
}

