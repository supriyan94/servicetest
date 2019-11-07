import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() menu: any;
  @Input() columns: string[];
  constructor() { }

  ngOnInit() {
  }

}
