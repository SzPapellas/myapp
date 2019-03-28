import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isHidden = true;

  constructor(private router: Router) {
    router.events.subscribe((val) => { this.isHidden = true; });
  }

  ngOnInit() {
  }

  toggleResponsiveMenu(): void {
    this.isHidden = !this.isHidden;
  }
}
