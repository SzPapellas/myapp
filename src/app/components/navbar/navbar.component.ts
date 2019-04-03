import {Component, HostListener, OnInit} from '@angular/core';
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
  username = 'Szabi';
  isProfileOpen = false;

  constructor(
      private router: Router,
      private loginService: LoginService
  ) {
    router.events.subscribe((val) => { this.isHidden = true; });
  }

  ngOnInit() {
    this.loginService.isLoggedIn().subscribe(value => {
      this.isLoggedIn = value;
    });
  }

  toggleResponsiveMenu(): void {
    this.isHidden = !this.isHidden;
  }

  toggleProfile(): void {
    this.isProfileOpen = !this.isProfileOpen;
  }
}
