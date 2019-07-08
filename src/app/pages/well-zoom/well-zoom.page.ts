import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LocalstorageService } from '../../services/localstorage.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router'
@Component({
  selector: 'app-well-zoom',
  templateUrl: './well-zoom.page.html',
  styleUrls: ['./well-zoom.page.scss'],
})
export class WellZoomPage implements OnInit {
  public poverty_info:any;
  constructor(public nav: NavController, public router: Router, public alertController: AlertController, public storage: LocalstorageService) { }

  ngOnInit() {
  }

  goBack() {
    this.nav.back();
  }

  ionViewWillEnter() {
    let temp_info = this.storage.get('userinfo');
    if (temp_info) {
      this.poverty_info = temp_info.poverty_info;
    } else {
      this.presentAlertConfirm();
    }
  }
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: '提示',
      mode:'ios',
      message: '还未登陆，是否登陆？',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            this.router.navigate(['/tabs/tab1'])
          }
        }, {
          text: '确定',
          handler: () => {
            this.router.navigate(['/login'])
          }
        }
      ]
    });
    await alert.present();
  }
}
