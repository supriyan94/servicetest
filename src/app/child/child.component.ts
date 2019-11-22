import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {
  @Input() menu: any;
  @Input() columns: string[];
  @Input() isMenu = false;
  @Input() isUser = false;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.isMenu) {
      console.log(this.columns);
      this.columns = ['id', 'menuName'];
    }
  }
}
