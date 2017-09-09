import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
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

  const source = Observable.create(observer => {
    for (const n of numbers) {
      observer.next(n);
    }
    observer.complete();
  });

  source
    .subscribe(
    value => console.log(`value: ${value}`),
    e => console.log(`error: ${e}`),
    () => console.log('complete')
    );

}
