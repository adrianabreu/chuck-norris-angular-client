export class SentenceFilterService {

    private activeFilters: string[];

    constructor() {
	    this.activeFilters = [];
    }

    toogle(filter) {
        if (!this.isActive(filter) ) {
            this.activeFilters.push(filter);
        } else {
            this.activeFilters.splice(this.activeFilters.indexOf(filter), 1); 
        }
    }

    isActive(filter): boolean {
       return this.activeFilters.indexOf(filter) != -1;
    }

    getActiveFilters(): string[] {
        return this.activeFilters;
    }

    clear(){
        this.activeFilters = [];
    }

}