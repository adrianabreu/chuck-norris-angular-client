import { SentenceFilterController as controller }  from './sentence-filter.controller';
import {IComponentOptions} from 'angular';

// TODO Extend IComponentOptions for adding name
export const SentenceFilterComponent = {
    name: 'sentenceFilter',
    // bindings: {
    //     filters : '<'
    // },
    controller,
    template: require('./sentence-filter.html')
};

