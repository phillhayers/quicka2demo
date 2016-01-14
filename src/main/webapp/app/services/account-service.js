System.register(['angular2/http', 'angular2/core', 'rxjs/Rx'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var http_1, core_1;
    var AccountService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {}],
        execute: function() {
            AccountService = (function () {
                function AccountService(http) {
                    this.accountsUrl = 'http://localhost:8080/accounts';
                    this.http = http;
                    this.getAll();
                }
                AccountService.prototype.getAll = function () {
                    var _this = this;
                    this.http.get(this.accountsUrl)
                        .map(function (res) { return res.json(); })
                        .subscribe(function (accounts) {
                        _this.accounts = accounts.sort(_this.compareTo);
                    });
                };
                AccountService.prototype.compareTo = function (a1, a2) {
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
                };
                AccountService.prototype.save = function (account) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this.http.post('http://localhost:8080/accounts', JSON.stringify(account), { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                AccountService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], AccountService);
                return AccountService;
            })();
            exports_1("AccountService", AccountService);
        }
    }
});
//# sourceMappingURL=account-service.js.map