System.register(['../models/account', '../services/account-service', '../models/bank', '../services/bank-service', 'angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var account_1, account_service_1, bank_1, bank_service_1, core_1;
    var AccountFormComponent;
    return {
        setters:[
            function (account_1_1) {
                account_1 = account_1_1;
            },
            function (account_service_1_1) {
                account_service_1 = account_service_1_1;
            },
            function (bank_1_1) {
                bank_1 = bank_1_1;
            },
            function (bank_service_1_1) {
                bank_service_1 = bank_service_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AccountFormComponent = (function () {
                function AccountFormComponent(accountService, bankService) {
                    this.submitted = new core_1.EventEmitter();
                    this.accountService = accountService;
                    this.bankService = bankService;
                    this.getBanks();
                    this.model = new account_1.Account();
                    this.model.bank = new bank_1.Bank();
                }
                AccountFormComponent.prototype.getBanks = function () {
                    var _this = this;
                    this.bankService.getAll()
                        .subscribe(function (banks) { return _this.banks = banks; });
                };
                AccountFormComponent.prototype.submit = function () {
                    var _this = this;
                    this.accountService.save(this.model)
                        .subscribe(function () { _this.accountService.getAll(); _this.submitted.emit({}); });
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], AccountFormComponent.prototype, "submitted", void 0);
                AccountFormComponent = __decorate([
                    core_1.Component({
                        selector: 'account-form',
                        templateUrl: 'app/account/account-form.component.html'
                    }), 
                    __metadata('design:paramtypes', [account_service_1.AccountService, bank_service_1.BankService])
                ], AccountFormComponent);
                return AccountFormComponent;
            })();
            exports_1("AccountFormComponent", AccountFormComponent);
        }
    }
});
//# sourceMappingURL=account-form.component.js.map