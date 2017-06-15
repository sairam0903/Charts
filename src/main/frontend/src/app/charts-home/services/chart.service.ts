import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class ChartService {

    private apiUri: string = environment.apiUri;
    
    constructor(private http: Http) {
    }
    
    getChart(): Observable<any> {
        return this.http
        .get(this.apiUri + '/getChart')
        .map((response: Response) => response.json());
    }
    
}
