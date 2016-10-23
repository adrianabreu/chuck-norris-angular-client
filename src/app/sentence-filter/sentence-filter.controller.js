export default class SentenceFiltersController {

  constructor(getterService, filterService) {
    this.filters  = [];

	  this.getterService  = getterService;
    this.filterService  = filterService;

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
      this.filterService.add(pFilter);
  }

  isActiveFilter(pFilter) {
      return this.filterService.isActive(pFilter);
  }

  clearFilter() {
      this.filterService.clear();
  }
}

SentenceFiltersController.$inject = ['sentenceFilterGetterService', 'sentenceFilterService'];