import { Component } from '@angular/core';
import { LocalstorageService } from '../services/localstorage.service';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public userinfo: any;
  public isShow: boolean = false;
  constructor(public storage: LocalstorageService, public toastController: ToastController, public alertController: AlertController) {

  }
  ngDoCheck() {
    let temp_userinfo = this.storage.get("userinfo");
    if (temp_userinfo) {
      this.isShow = true;
      this.userinfo = temp_userinfo;
    }
  }
  ngOnInit(): void {
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1500,
      mode: 'ios',
      color: 'dark'
    });
    toast.present();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: '提示',
      message: '确定退出当前用户？',
      mode:'ios',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            this.presentToast('取消成功');
          }
        }, {
          text: '确定',
          handler: () => {
            this.storage.remove('userinfo');
            this.isShow = false;
            this.presentToast("成功登出");
          }
        }
      ]
    });
    await alert.present();
  }
}
