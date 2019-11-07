import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMenu } from './menu';
import { IContent } from './content';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  menuList: IMenu[];
  menuColumns: string[];
  contentList: IContent[];
  contentColumns: string[];
  constructor(private httpService: HttpClient) { }
  getData() {
    return this.httpService.get('../../assets/data.json');
  }
}
