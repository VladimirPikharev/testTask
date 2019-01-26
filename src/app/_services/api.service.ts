import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';

@Injectable()

export class ApiService {
    public _apiEndpoint = 'https://api.datamuse.com/';


    constructor(public http: HttpClient) {
    }

    public post(url: string, data: any, auth?: boolean): Observable<any> {
        return this.http.post(this._apiEndpoint + url, data);
    }

    public get(url: string, auth?: boolean): Observable<any> {
        return this.http.get(this._apiEndpoint + url);
    }

    public patch(url: string, auth?: boolean): Observable<any> {
        return this.http.get(this._apiEndpoint + url);
    }

    public put(url: string, data: any, auth?: boolean): Observable<any> {
        return this.http.put(this._apiEndpoint + url, data);
    }

    public deleteRequest(url: string, auth?: boolean): Observable<any> {
        return this.http.delete(this._apiEndpoint + url);
    }
}
