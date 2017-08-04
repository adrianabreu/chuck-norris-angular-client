import { Component } from 'angular-ts-decorators';
import { SentenceFilterService } from '../sentence-filter.service';

@Component({
    selector: 'sentenceFilter',
    template: require('./sentence-filter.html'),
    styles: [require('./sentence-filter.scss')]
})
export class SentenceFilterComponent {

    public static $inject = [
        '$log',
        '$timeout',
        'SentenceFilterService'
    ];
    public filters: string[] = [];

    constructor(private $log, private $timeout, private filterService: SentenceFilterService) {
        this.getFilters();
    }
    
    private getFilters() {
        this.filterService
            .getFilters()
            .then(response => this.filters = response.data.value);
    }

    toogleFilter(pFilter) {
        this.$log.debug('SentenceFilterController.addFilter:' + pFilter);
        this.filterService.toogle(pFilter);
    }

    isActiveFilter(pFilter) {
        return this.filterService.isActive(pFilter);
    }

    clearFilter() {
        this.filterService.clear();
    }
}