import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  private isLogin = new BehaviorSubject(false);

  currentLoginStatus = this.isLogin.asObservable();

  changeLoginStatus(status : boolean){
    this.isLogin.next(status);
  }

  constructor() { }
}
