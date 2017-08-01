import { IHttpPromise ,IHttpService } from 'angular';
import { SentenceModel } from './sentence.model';
import { Injectable } from 'angular-ts-decorators';

@Injectable()
export class SentenceGetterService {

	private resource_url = 'https://api.icndb.com/jokes/random';
	static $inject = [ '$log', '$http' ];

	constructor(
		private $log,
		private $http: IHttpService
	) { }

	getRandomJoke(limitTo? : string[]): IHttpPromise<any> {
		return this.$http.get(this.resource_url, {
			params: {
				limitTo
			}
		});
	}
}