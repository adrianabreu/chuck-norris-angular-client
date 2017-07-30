import { IHttpPromise, IHttpService } from 'angular';
import { Injectable } from 'angular-ts-decorators';

@Injectable(SentenceFilterService.name)
export class SentenceFilterService {

    private activeFilters: string[];
    private filtersUrl = 'https://api.icndb.com/categories';

    static $inject = ['$http'];

    constructor(private $http: IHttpService) {
	    this.activeFilters = [];
    }

    getFilters(): IHttpPromise<any> {
        return this.$http.get(this.filtersUrl);
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