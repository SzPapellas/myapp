import {AfterViewInit, Component} from '@angular/core';
import {
  NavigationEnd,
  Router
} from '@angular/router';
import {googleAnalytics} from './services/google.service';
import {filter, map} from 'rxjs/operators';
import { RouterEvent } from '@angular/router';

declare var gtag: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
environment = null;
  title = 'my-app';

  constructor(public router: Router) {

  }

  ngAfterViewInit(): void {
    this.router.events.pipe(
        filter(event => event instanceof NavigationEnd),
        map((event: NavigationEnd) => googleAnalytics(event.urlAfterRedirects))
    ).subscribe();
  }
}
