import {Page} from 'ionic-framework/ionic';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';

@Page({
  templateUrl: 'build/pages/page1/page1.html',
})
export class Page1 {
  lines : string;
  constructor(http: Http) {
    http.post('http://localhost:3000/lines','').map(res => res.json()).subscribe(data => {
    this.lines = data;
    console.log(data);
  });
}
}
