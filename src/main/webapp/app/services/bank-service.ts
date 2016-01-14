import {Bank} from '../models/bank';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs';
import {ValuesPipe} from '../models/pipes';
import 'rxjs/Rx';

@Injectable()
export class BankService {
	private http: Http;

	constructor(http: Http) {
		this.http = http;
	}
	
	public getAll(): Observable<Bank[]> {
		return this.http.get('http://localhost:8080/banks')
			.map(res => res.json());
	}		
}