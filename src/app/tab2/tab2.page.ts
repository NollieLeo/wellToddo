import { Component } from '@angular/core';
import { RequestService } from '../services/request.service'
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public tabs: any = 'pnews';
  public news: any;
  constructor(public request: RequestService) { }
  ionViewWillEnter() {
    this.request.getJson("assets/app.json").then((data:any)=>{
      this.news = data.news;
    })
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }
  segmentChanged(e) {
    console.log(e);
  }
}
