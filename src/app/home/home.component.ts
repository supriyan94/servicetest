import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { IMenu } from '../menu';
import { IContent } from '../content';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  menuList: IMenu[];
  menuColumns: string[];
  contentList: IContent[];
  contentColumns: string[];
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.getData().subscribe((res) => {
      this.menuList = res['menu'].data;
      this.menuColumns = res['menu'].colums;
      this.contentList = res['content'].data;
      this.contentColumns = res['content'].colums;
      console.log(res);
    }
    );
  }

}
