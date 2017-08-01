import { NgModule } from 'angular-ts-decorators';
import { SentenceGetterService } from './sentence/sentence-getter.service';

@NgModule({
    id: 'aaa',
    providers: [
        { provide: 'SentenceGetterService', useClass: SentenceGetterService },
    ]
})
export class FooModule {

}