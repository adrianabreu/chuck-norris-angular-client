import * as  _ from 'lodash';
import { Injectable } from 'angular-ts-decorators';

@Injectable('SentenceHistoricalFilterService')
export class SentenceHistoricalFilterService {

    private activeFilters: string[];

	constructor() {
	    this.activeFilters = [];
    }

    toogle(filter) {
        if ( !this.isActiveClass(filter) ) {
            this.activeFilters.push(filter);
        }  else {
            this.activeFilters.splice(this.activeFilters.indexOf(filter), 1);
        }
        
    }

    isActive(filter) {
       return _.size(_.intersection(this.activeFilters,filter)) > 0;
    }

    isActiveClass(filter){
        //We store the value as plain, so we have to compare making it an array
        //in isActvie that's not necessary because it is an array
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