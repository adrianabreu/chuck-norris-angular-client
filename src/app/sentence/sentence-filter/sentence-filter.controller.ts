export class SentenceFilterController {

  public filters: string[];
  
  constructor(private $log, private getterService, private filterService) {
    this.filters       = [];    
    this.getFilters();
  }

  getFilters(){
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
  'SentenceFilterService'
];