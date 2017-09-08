import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';


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
  console.log(numbers);
  const source = Observable.create(numbers);

}
