import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  list: Object;
  return: any;
  result: any;
  constructor(private home: HomeService) { }
  //polling  every 10 sec
  ngOnInit() {
    this.get();
    setInterval(time => { this.get() }, 10000)
  }
  data(flag) {
    this.result = flag;
  }
  get() {
    this.home.getTweets().subscribe(res => {
      this.list = res['hits'];
      console.log(this.list);
    })
  }
}
