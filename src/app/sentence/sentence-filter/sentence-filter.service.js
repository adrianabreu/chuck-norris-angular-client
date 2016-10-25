export default class sentenceFilterService {

    constructor() {
	    this.activeFilters = [];
    }

    toogle(filter) {
        (!this.isActive(filter)) ?
            this.activeFilters.push(filter) :
        this.activeFilters.splice(this.activeFilters.indexOf(filter), 1);    
    }

    isActive(filter) {
       return this.activeFilters.indexOf(filter) != -1;
    }

    get(filter) {
        return this.activeFilters;
    }

    clear(){
        this.activeFilters = [];
    }

}