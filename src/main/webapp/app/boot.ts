import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {AccountService} from './services/account-service';
import {BankService} from './services/bank-service';
import {HTTP_PROVIDERS} from 'angular2/http';

bootstrap(AppComponent, [AccountService, BankService, HTTP_PROVIDERS]);