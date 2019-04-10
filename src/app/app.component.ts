import {AfterViewInit, Component} from '@angular/core';
import {
  NavigationEnd,
  Router
} from '@angular/router';
import {googleAnalytics} from './services/google.service';
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
    this.router.events.subscribe(event => {

      if (event instanceof NavigationEnd) {
        // (window as any).ga('set', 'page', event.urlAfterRedirects);
        // (window as any).ga('send', 'event', {name: 'pagechange'});
        googleAnalytics(event.urlAfterRedirects);
      }

    });
  }

}
