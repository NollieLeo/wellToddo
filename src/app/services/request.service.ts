import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(public http: Http) { }
  getJson(url) {
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe((response: any) => {
        resolve(JSON.parse(response._body))
      }, (err: any) => {
        reject(err);
      })
    })
  }
}
