import {Account} from "../../../models/account";
import {AccountService} from "../../../services/account-service";
import {Bank} from "../../../models/bank";
import {BankService} from "../../../services/bank-service";
import {Component} from "angular2/core";
@Component({
    selector: 'account-form',
    templateUrl: 'app/components/account/account-form/account-form.component.html'
})
export class AccountFormComponent {
    public banks:Bank[];
    public model:Account;
    private accountService:AccountService;
    private bankService:BankService;


    constructor(accountService:AccountService, bankService:BankService) {
        this.accountService = accountService;
        this.bankService = bankService;
        this.getBanks();
        this.initialiseAccount();
    }

    private initialiseAccount():void {
        this.model = new Account();
        this.model.bank = new Bank();
    }

    getBanks():void {
        this.bankService.getAll()
            .subscribe(banks => this.banks = banks);
    }

    public submit():void {
        this.accountService.save(this.model)
            .subscribe(() => {
                this.accountService.getAll();
                this.initialiseAccount();
            });
    }
}