export default class SentenceGetterController {

  constructor($sce,getterService,filterService ) {
  	this.$sce           = $sce;
	  this.getterService  = getterService;
		this.filterService  = filterService;
	  this.sentence       = $sce.trustAsHtml('let\'s get it');
  }

  get(){
  	this.getterService
  		.get()
  		.$promise
  		.then((data)=>{
  			this.sentence = this.$sce.trustAsHtml(data.value.joke);
  		});
  }
}

SentenceGetterController.$inject = [
	'$sce', 
	'sentenceGetterService',
	'sentenceFilterService'
];