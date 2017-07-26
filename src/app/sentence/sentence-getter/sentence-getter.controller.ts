import { SentenceFilterService } from '../sentence-filter/sentence-filter.service';

export class SentenceGetterController {  

	private sentenceRequested: boolean;
	private sentence: any;
	public static $inject: string[] = [
		'$sce', 
		'SentenceGetterService',
		'SentenceFilterService'
	];

  constructor(
		private $sce, 
		private getterService,
		private sentencefilterService: SentenceFilterService
	) {
  	this.sentenceRequested = false;
	  this.sentence          = $sce.trustAsHtml('let\'s get it');
  }

  get(){
    this.sentenceRequested = true;
    this.getterService
  		.get({
        limitTo : this.sentencefilterService.getActiveFilters()
      })
  		.$promise
  		.then((data)=>{
  			this.sentence = this.$sce.trustAsHtml(data.joke);
  		});
  }
}