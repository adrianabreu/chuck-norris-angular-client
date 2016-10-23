export default class sentenceHistoricalService {

    constructor() {
		this.sentences  = [];
		this.categories = [];
    }

    add(sentence) {
        this.sentences.push(sentence);
    }

    addCategory(category){
        this.categories = _.union(this.categories,category);
    }

    get() {
        return this.sentences;
    }

    getCategories(){
    	return this.categories;
    }
    
}