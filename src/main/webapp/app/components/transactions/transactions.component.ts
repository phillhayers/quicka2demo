import {AccountFormComponent} from '../account/account-form/account-form.component.ts';
import {AccountService} from '../../services/account-service';
import {Component, Inject} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {ValuesPipe} from '../../models/pipes';
import 'rxjs/Rx';

@Component({
    directives: [AccountFormComponent, FORM_DIRECTIVES],
    pipes: [ValuesPipe],
    selector: 'transactions',
    templateUrl: '/app/transactions/transactions.html'
})
export class ProfileComponent {
    private accountService: AccountService;

    constructor(accountService: AccountService) {
        this.accountService = accountService;
    }
}