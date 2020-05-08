import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseViewModel } from 'src/app/models/response.model';
import { News } from 'src/app/models/News';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.css']
})
export class LeftSideComponent implements OnInit {

  allNews:News[] = [];
  constructor(private _newsService:NewsService) { }

  ngOnInit(): void {
    this.getMoreViewedNews();
  }

  getMoreViewedNews():void{
    this._newsService.getMoreViewedNews().subscribe(response => {
      let responseViewModel: ResponseViewModel = new ResponseViewModel();
      responseViewModel = response as ResponseViewModel;
      if (responseViewModel.Success) {
        this.allNews = responseViewModel.Data;
      }
    }, error => {
        alert("Error Happens");
    });
  }
}
