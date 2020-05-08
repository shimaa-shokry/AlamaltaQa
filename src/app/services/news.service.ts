import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private _httpClient:HttpClient) { }

  getMoreViewedNews(){
    return this._httpClient.get(`${environment.apiURL}/GetMoreViews`);
  }
  getDetailsNews(){
    return this._httpClient.get(`${environment.apiURL}/GetDetails`); 
  }

  getTrendNews(){
    return this._httpClient.get(`${environment.apiURL}/GetTrendNews`); 
  }
}
