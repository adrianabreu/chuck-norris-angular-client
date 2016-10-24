export default class SentenceHistoricalFilterController {

  constructor($log,sentenceHistoricalService, sentenceHistoricalFilterService) {
  	   this.$log                    = $log;
	   this.historicalService       = sentenceHistoricalService;
	   this.historicalFilterService = sentenceHistoricalFilterService;
  }  

  getHistoricalCategories(){
  	return this.historicalService.getCategories();
  }

  addFilter(pFilter) {
      this.$log.debug('SentenceHistoricalFilterController.addFilter:'+ pFilter);
      this.historicalFilterService.add(pFilter);
  }

  isActiveFilter(pFilter) {
      return this.historicalFilterService.isActiveClass(pFilter);
  }

  clearFilter() {
      this.historicalFilterService.clear();
  }
}

SentenceHistoricalFilterController.$inject = [
  '$log',
  'sentenceHistoricalService',
  'sentenceHistoricalFilterService'
];