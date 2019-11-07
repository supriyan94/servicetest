import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'servicetest';

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.getData().subscribe((res) => {
      this._dataService.menuList = res['menu'].data;
      this._dataService.menuColumns = res['menu'].colums;
      this._dataService.contentList = res['content'].data;
      this._dataService.contentColumns = res['content'].colums;
      console.log(res);
    }
    );
  }
}
