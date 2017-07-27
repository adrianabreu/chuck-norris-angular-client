import * as _ from 'lodash';
import { ngStorage } from 'ngstorage';

export class SentenceHistoricalService {

    private sentences: string[];
    private categories: string[];
    public  local:any;

    static $inject = [
        '$localStorage'
    ];

    constructor($localStorage: ngStorage.StorageService) {
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