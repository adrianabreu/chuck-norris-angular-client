export default class SentenceFilterController {

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

  toogleFilter(pFilter) {
      this.$log.debug('SentenceFilterController.addFilter:'+ pFilter);
      this.filterService.toogle(pFilter);
  }

  isActiveFilter(pFilter) {
      return this.filterService.isActive(pFilter);
  }

  clearFilter() {
      this.filterService.clear();
  }
}

SentenceFilterController.$inject = [
  '$log',
  'sentenceFilterGetterService', 
  'sentenceFilterService'
];