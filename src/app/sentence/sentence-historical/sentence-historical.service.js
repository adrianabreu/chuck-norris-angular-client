export default class sentenceHistoricalService {

    constructor($localStorage) {
        this.local = $localStorage.$default({
             sentences  : [],
             categories : []
        });
		this.sentences  = $localStorage.sentences;
		this.categories = $localStorage.categories;
    }

    add(sentence) {
        this.sentences.push(sentence);
    }

    addCategory(category){
        this.local.categories = _.union(this.categories,category);
        this.categories       = _.union(this.categories,category);
    }

    get() {
        return this.sentences;
    }

    getCategories() {
    	return this.categories;
    }

    clearCache() {
        this.local.$reset({
             sentences  : [],
             categories : []
        });

        this.sentences  = this.local.sentences;
        this.categories = this.local.categories;

    }
}

sentenceHistoricalService.$inject = ['$localStorage'];