export default class SentenceGetterController {
  constructor(pService,$sce) {
  	this.$sce     = $sce;
	this.service  = pService;
	this.sentence = $sce.trustAsHtml('let\'s get it');
  }

  get(){
  	this.service
  		.get()
  		.$promise
  		.then((data)=>{
  			this.sentence = this.$sce.trustAsHtml(data.value.joke);
  		});
  }
}

SentenceGetterController.$inject = ['sentenceGetterService','$sce'];