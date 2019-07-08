import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  set(key:any, value:any) {
    // 对象转换为字符串
    localStorage.setItem(key, JSON.stringify(value));
  }

  get(key:any) {
    //字符串转换对象
    return JSON.parse(localStorage.getItem(key));
  }

  remove(key:any) {
    localStorage.removeItem(key);
  }
}
