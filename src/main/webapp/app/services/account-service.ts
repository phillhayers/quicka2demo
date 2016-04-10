import {Account} from '../models/account';
import {Http, Headers} from 'angular2/http';
import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class AccountService {
    private http:Http;
    private accountsUrl = 'http://localhost:8080/accounts';
    public accounts:Account[];

    constructor(http:Http) {
        this.http = http;
        this.getAll();
    }

    public getAll():void {
        this.http.get(this.accountsUrl)
            .map(res => res.json())
            .subscribe(accounts => {
                this.accounts = accounts.sort(this.compareTo);
            });
    }

    private compareTo(a1:Account, a2:Account):number {
        if (a1.bank.name > a2.bank.name) {
            return 1;
        }
        if (a1.bank.name < a2.bank.name) {
            return -1;
        }
        if (a1.name > a2.name) {
            return 1;
        }
        if (a1.name < a2.name) {
            return -1;
        }
        return 0;
    }

    public save(account:Account):Observable<Account> {
        console.log('saving account');
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8080/accounts', JSON.stringify(account), {headers: headers})
            .map(res => res.json());
    }
}