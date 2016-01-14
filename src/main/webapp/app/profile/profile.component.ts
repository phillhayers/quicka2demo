import {AccountFormComponent} from '../account/account-form.component';
import {AccountService} from '../services/account-service';
import {Bank} from '../models/bank';
import {Component, Inject} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {ValuesPipe} from '../models/pipes';
import 'rxjs/Rx';

@Component({
	directives: [AccountFormComponent, FORM_DIRECTIVES],
	pipes: [ValuesPipe],
	selector: 'profile',
	templateUrl: '/app/profile/profile.html'
})
export class ProfileComponent {
	private accountService: AccountService;
	public editingAccount: Boolean;

	constructor(accountService: AccountService) {
		this.accountService = accountService;
	}

	getLogo(bank: Bank): string {
		return 'app/resources/images/' + bank.logoFile;
	}

	accountCreated(): void {
		this.editingAccount = false;
	}
}