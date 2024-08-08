import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Item } from '../interfaces/item';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private URL_BASE:string;
  private URL_ID:string;
  private URL_DETAILS:string;
  constructor(private http:HttpClient) {
    this.URL_BASE = "https://hacker-news.firebaseio.com/v0";
    this.URL_ID = "/newstories.json";
    this.URL_DETAILS = "/item/";

  }

  getNewsID():Observable<number[]>{
    return this.http.get<number[]>(`${this.URL_BASE}${this.URL_ID}`);
  }

  getNewsDetail(id:number):Observable<Item>{
    return this.http.get<Item>(`${this.URL_BASE}${this.URL_DETAILS}${id}.json`);
  }


}
