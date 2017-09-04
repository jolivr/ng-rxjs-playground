import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/observable';

import 'rxjs/add/observable/from';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    doRx();
  }
}

function doRx() {
  const numbers = [1, 5, 10];

  const source = Observable.from(numbers);


}
