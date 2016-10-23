export default class SentenceFiltersController {
  constructor(pService) {
    this.filters  = [];
	this.service  = pService;
    this.get();
  }

  get(){
    this.service
  		.get()
  		.$promise
  		.then((data)=>{
  			this.filters = data.value;
  		});
  }
}

SentenceFiltersController.$inject = ['sentenceFilterService'];