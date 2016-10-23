export default class SentenceFiltersController {

  constructor($log, getterService, filterService) {
    this.filters       = [];    
    this.$log          = $log;
    this.getterService = getterService;
    this.filterService = filterService;
    this.get();
  }

  get(){
    this.getterService
  		.get()
  		.$promise
  		.then((data)=>{
  			this.filters = data.value;
  		});
  }

  addFilter(pFilter) {
      this.$log.debug('SentenceFiltersController.addFilter:'+ pFilter);
      this.filterService.add(pFilter);
  }

  isActiveFilter(pFilter) {
      return this.filterService.isActive(pFilter);
  }

  clearFilter() {
      this.filterService.clear();
  }
}

SentenceFiltersController.$inject = [
  '$log',
  'sentenceFilterGetterService', 
  'sentenceFilterService'
];