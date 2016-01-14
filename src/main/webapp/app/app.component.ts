import {Component} from 'angular2/core';
import {ProfileComponent} from './profile/profile.component';

@Component({
    selector: 'my-app',
    template: `
    <profile></profile>
    `,
    directives: [ProfileComponent]
    
})
export class AppComponent { }