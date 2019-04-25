import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent implements OnInit {

  isInsideClick = false;

  languages = [
    {
      label: 'Magyar',
      path: '../../assets/flags/flag-of-Hungary.png'
    },
    {
      label: 'English',
      path: '../../assets/flags/flag-of-United-Kingdom.png'
    },
  ];

  selectedLanguage = this.languages[0];
  isLanguageSelectorVisible = false;

  @HostListener('click')
  clickInside() {
    this.isInsideClick = true;
  }

  @HostListener('document:click')
  clickOutside() {
    if (!this.isInsideClick && this.isLanguageSelectorVisible) {
      this.toggleLanguageSelector();
    }

    this.isInsideClick = false;
  }

  constructor() { }

  ngOnInit() {
  }

  toggleLanguageSelector() {
    this.isLanguageSelectorVisible = !this.isLanguageSelectorVisible;
  }

  setActiveLanguage(language) {
    this.selectedLanguage = language;
    this.toggleLanguageSelector();
  }

}
