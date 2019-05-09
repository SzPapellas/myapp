import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isHidden = true;
  isLoggedIn = false;

  constructor(
      private router: Router,
      private loginService: LoginService
  ) {
    router.events.subscribe(() => { this.isHidden = true; });
  }

  ngOnInit() {
    this.loginService.isLoggedIn().subscribe(value => {
      this.isLoggedIn = value;
    });
  }

  toggleResponsiveMenu(): void {
    this.isHidden = !this.isHidden;
  }

  logout(): void {
    this.loginService.setLoginStatus(false);
    this.router.navigate(['/home']);
  }
}
