import {
    IServiceProvider,
    IHttpService,
    IHttpPromise,
    IRequestConfig,
    IRequestShortcutConfig,
} from 'angular';

// based on http://www.software-architects.com/devblog/2014/10/24/AngularJS-Provider-in-TypeScript
// TODO: interface naming
export interface IHttpOperations<T> {
    get(params: T, config?: IRequestShortcutConfig): IHttpPromise<T>,
    post(data: T, config?: IRequestShortcutConfig): IHttpPromise<T>
}

export class HttpServiceProvider<T> implements IServiceProvider {

    private url: string;
    // TODO: config object setting cached, timeout, etc to all 
    // request of the service

    public setUrl(url: string) {
        this.url = url;
    }

    $get<T>(
        $http: IHttpService
    ): IHttpOperations<T> {
        return {
            // TODO: Object.assign(this.config, config, { params }))
            get: (params: T, config?: IRequestShortcutConfig) =>
                $http.get(this.url, Object.assign({}, config, { params })),
            post: (data: T, config?: IRequestShortcutConfig) =>
                $http.post(this.url, config)
        }
    }
}