import { Component, ViewChild } from '@angular/core';
import { RequestService } from '../services/request.service'
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  @ViewChild('slideBar') slide;
  public slideOpts = {
    effect: 'fade',
    speed: 600,
    loop: false, autoplay: { delay: 4000 },
    scrollbar: true
  } //slides的opt属性
  public tabs_images: any; //slide的图片
  public imgAddress: any = 'assets/images/' //本地图片地址
  ionViewWillEnter() {
    this.request.getJson('assets/app.json').then((data: any) => {
      this.tabs_images = data.tabsImages;
      // console.log(this.tabs_images);
    })

  }
  constructor(public request: RequestService) {
  }

  ngOnInit(): void {

  }

  doSlide() {
    this.slide.startAutoplay();
  }
}
