import {Bank} from './bank';

export class Account {
  // http: Http;
  public name: String;
  public balance: Number;
  public bank: Bank;
  public editable: Boolean;

  constructor() {
  }
  //   this.http = http;
	  
  //   http.get('people.json')
  //     // Call map on the response observable to get the parsed people object
  //     .map(res => res.json())
  //     // Subscribe to the observable to get the parsed people object and attach it to the
  //     // component
  //     .subscribe(people => this.people = people);
  // }
  
  
}