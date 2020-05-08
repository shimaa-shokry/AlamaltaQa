import { Component, OnInit } from '@angular/core';
import { ResponseViewModel } from 'src/app/models/response.model';
import { NewsService } from 'src/app/services/news.service';
import { News } from 'src/app/models/News';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allNews: News[] = [];
  constructor(private _newsService: NewsService) { }

  ngOnInit(): void {
    this.GetDetailsOfNews();
  }

  GetDetailsOfNews(): void {
    this._newsService.getDetailsNews().subscribe(response => {
      let responseViewModel: ResponseViewModel = new ResponseViewModel();
      responseViewModel = response as ResponseViewModel;
      if (responseViewModel.Success) {
        this.allNews = responseViewModel.Data;
      }
    }, error => {
      alert("error happens");
    });
  }

}
