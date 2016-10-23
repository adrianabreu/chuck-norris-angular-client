export default class sentenceHistoricalFilterService {

	constructor() {
	    this.activeFilters = [];
    }

    add(filter) {
        this.activeFilters.push(filter);
    }

    isActive(filter) {
       return _.size(_.intersection(this.activeFilters,filter)) > 0;
    }

    isActiveClass(filter){
        return _.size(_.intersection(this.activeFilters,[filter])) > 0;    
    }

    isEmpty(){
        return this.activeFilters.length === 0;
    }

    get(filter) {
        return this.activeFilters;
    }

    clear(){
        this.activeFilters = [];
    }

}