import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-footer-bar',
  templateUrl: './contact-footer-bar.component.html',
  styleUrls: ['./contact-footer-bar.component.scss']
})
export class ContactFooterBarComponent implements OnInit {

  phoneNumber = '';
  email = 'szabolcspapellas@gmailcom';

  constructor() { }

  ngOnInit() {
  }

}
