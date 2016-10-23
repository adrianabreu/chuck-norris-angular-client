export default class SentenceGetterController {

  constructor($sce,getterService,filterService) {
  	this.$sce              = $sce;
	  this.getterService     = getterService;
		this.filterService     = filterService;
    this.sentenceRequested = false;
	  this.sentence          = $sce.trustAsHtml('let\'s get it');
  }

  get(){
    this.sentenceRequested = true;
    this.getterService
  		.get({
        limitTo : this.filterService.get()
      })
  		.$promise
  		.then((data)=>{
  			this.sentence = this.$sce.trustAsHtml(data.joke);
  		});
  }
}

SentenceGetterController.$inject = [
	'$sce', 
	'sentenceGetterService',
	'sentenceFilterService',
];