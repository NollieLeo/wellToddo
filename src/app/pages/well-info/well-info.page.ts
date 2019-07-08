import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LocalstorageService } from '../../services/localstorage.service';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-well-info',
  templateUrl: './well-info.page.html',
  styleUrls: ['./well-info.page.scss'],
})
export class WellInfoPage implements OnInit {
  public userinfo: any;
  public is_filled_info: any;
  constructor(public nav: NavController, public toastController: ToastController, public router: Router, public active: ActivatedRoute, public alertController: AlertController, public storage: LocalstorageService) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    let temp_info = this.storage.get('userinfo');
    if (temp_info) {
      this.userinfo = temp_info;
    } else {
      this.presentAlertConfirm();
    }
    this.is_filled_info = this.userinfo.is_filled_info;
  }
  goBack() {
    this.nav.back();
  }
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: '提示',
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
  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
  // changeInfo 用户修改信息
  changeInfo() {
    if (this.userinfo.address !== '' && this.userinfo.income !== '' && this.userinfo.family_numbers !== '' && this.userinfo.registered_type && this.userinfo.income_source !== '' && this.userinfo.average_income !== '' && this.userinfo.att_people !== '' && this.userinfo.att_people !== '') {
      this.storage.set('userinfo', this.userinfo);
      this.router.navigate(['/tabs/tab1']);
      this.presentToast('信息修改成功');
    } else {
      this.presentToast('请填入必选项')
    }
  }
  // fillInfo 新用户填写信息
  fillInfo() {
    if (this.userinfo.address !== '' && this.userinfo.income !== '' && this.userinfo.family_numbers !== '' && this.userinfo.registered_type && this.userinfo.income_source !== '' && this.userinfo.average_income !== '' && this.userinfo.att_people !== '' && this.userinfo.att_people !== '') {
      this.userinfo.is_filled_info = true;
      this.storage.set('userinfo', this.userinfo);
      this.router.navigate(['/tabs/tab1']);
      this.presentToast('信息填写成功');
    } else {
      this.presentToast('请填入必选项')
    }
  }
}
