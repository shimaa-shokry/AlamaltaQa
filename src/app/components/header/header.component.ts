import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  date:Date;
  today: number;
  constructor() { 
    setInterval(() => {
      this.date = new Date();
      this.today = this.date.getTime();
    }, 1000)
  }

  ngOnInit(): void {
  }

}
