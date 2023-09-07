import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isUserLoggedInChange: Subject<boolean> = new Subject<boolean>();


  constructor() { }

  isLoggedIn(): boolean {
    return sessionStorage.getItem('USER') == 'true';
  }

  login() {
    sessionStorage.setItem('USER', 'true');
    this.isUserLoggedInChange.next(true);
  }
  logout(){
    sessionStorage.clear();
  }
}
