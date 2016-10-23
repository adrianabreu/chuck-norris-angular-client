export default class sentenceFilterService {

    constructor() {
	    this.activeFilters = [];
    }

    add(filter) {
        this.activeFilters.push(filter);
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