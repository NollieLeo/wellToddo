import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LocalstorageService } from '../../services/localstorage.service';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.page.html',
  styleUrls: ['./userinfo.page.scss'],
})
export class UserinfoPage implements OnInit {
  public input_info: any;
  constructor(public nav: NavController, public toastController: ToastController, public storage: LocalstorageService) { }
  ionViewWillEnter() {
    this.input_info = this.storage.get('userinfo');
  }
  ngOnInit() {
  }
  goBack() {
    this.nav.back();
  }
  changeInfo() {
    this.presentToast("修改成功");
    this.nav.back();
  }
  // ionic toast
  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1500,
      mode:'ios',
      color:'dark'
    });
    toast.present();
  }
}
