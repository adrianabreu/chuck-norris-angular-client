import { Component } from 'angular-ts-decorators';


@Component({
    selector: SentenceComponent.componentSelector,
    template: require('./sentence.html'),    
})
export class SentenceComponent {

    static componentSelector: string = 'sentenceComponent';
}