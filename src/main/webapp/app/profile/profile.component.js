System.register(['../account/account-form.component', '../services/account-service', 'angular2/core', 'angular2/common', '../models/pipes', 'rxjs/Rx'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var account_form_component_1, account_service_1, core_1, common_1, pipes_1;
    var ProfileComponent;
    return {
        setters:[
            function (account_form_component_1_1) {
                account_form_component_1 = account_form_component_1_1;
            },
            function (account_service_1_1) {
                account_service_1 = account_service_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (pipes_1_1) {
                pipes_1 = pipes_1_1;
            },
            function (_1) {}],
        execute: function() {
            ProfileComponent = (function () {
                function ProfileComponent(accountService) {
                    this.accountService = accountService;
                }
                ProfileComponent.prototype.getLogo = function (bank) {
                    return 'app/resources/images/' + bank.logoFile;
                };
                ProfileComponent.prototype.accountCreated = function () {
                    this.editingAccount = false;
                };
                ProfileComponent = __decorate([
                    core_1.Component({
                        directives: [account_form_component_1.AccountFormComponent, common_1.FORM_DIRECTIVES],
                        pipes: [pipes_1.ValuesPipe],
                        selector: 'profile',
                        templateUrl: '/app/profile/profile.html'
                    }), 
                    __metadata('design:paramtypes', [account_service_1.AccountService])
                ], ProfileComponent);
                return ProfileComponent;
            })();
            exports_1("ProfileComponent", ProfileComponent);
        }
    }
});
//# sourceMappingURL=profile.component.js.map