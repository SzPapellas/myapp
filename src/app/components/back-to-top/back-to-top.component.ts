import {
  Component,
  HostListener
} from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.scss']
})
export class BackToTopComponent {

  isBackToTopVisible = false;
  showScrollHeight = 50;
  hideScrollHeight = 50;

  @HostListener('window:scroll', []) onWindowScroll() {
    const offset =  window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    if (offset > this.showScrollHeight) {
      this.isBackToTopVisible = true;
    } else if (this.isBackToTopVisible && offset < this.hideScrollHeight) {
      this.isBackToTopVisible = false;
    }
  }

  backToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

    this.isBackToTopVisible = false;
  }
}
