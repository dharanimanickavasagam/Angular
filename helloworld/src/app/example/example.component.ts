import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})


export class ExampleComponent implements OnInit {
  value1 = 'hi';
  value2 = 'hello';

  constructor() { }

  ngOnInit() {
  }


}
