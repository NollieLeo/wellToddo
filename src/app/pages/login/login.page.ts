import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { Router, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { LocalstorageService } from '../../services/localstorage.service';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public hasData: boolean = false;
  public img_address: any = 'assets/images/' //图片地址
  public login_type_img: any; //登陆类型图片数组
  public phone: any; //双向数据绑定的电话号码
  public allUsers: any; //所有用户的数组
  public code: number = 123;
  constructor(public request: RequestService, public toastController: ToastController, public router: Router, public nav: NavController, public storage: LocalstorageService) { }
  ionViewWillEnter() {
    this.login_type_img = this.request.getJson('assets/app.json').then((data: any) => {
      this.login_type_img = data.login_type;
      this.allUsers = data.users;
    })
  }
  ngOnInit() {
  }
  goBack() {
    this.nav.back();
  }
  doLogin() {
    if (!(/^1[3456789]\d{9}$/.test(this.phone))) {
      this.presentToast("手机号码有误")
    } else {
      var temp_info = this.checkUser();
      if (temp_info) {
        this.presentToast('登陆成功');
        this.storage.set('userinfo', temp_info);
        if (temp_info.is_filled_info) {
          this.router.navigate(['/tabs/tab3']);
        } else {
          this.router.navigate(['/well-info']);
        }
      } else {
        this.presentToast('手机号未注册');
      }
    }
  }
  // 判断json文件里面有没有手机号
  checkUser() {
    for (let i = 0; i < this.allUsers.length; i++) {
      const element = this.allUsers[i];
      if (element.phone == this.phone) {
        return element
      } else {
        continue;
      }
    }
  }
  // ionic toast
  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1500,
      mode: 'ios',
      color: 'dark'
    });
    toast.present();
  }
}
