import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() { }

  isLoggedIn(): BehaviorSubject<boolean> {
    return this.isUserLoggedIn;
  }

  setLoginStatus(value: boolean): void {
    this.isUserLoggedIn.next(value);
  }
}
