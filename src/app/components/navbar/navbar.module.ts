import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {NavbarComponent} from './navbar.component';
import {LanguageSelectorComponent} from '../language-selector/language-selector.component';

@NgModule({
    declarations: [
        NavbarComponent,
        LanguageSelectorComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    bootstrap: [
        NavbarComponent
    ],
    exports: [
        NavbarComponent
    ]
})
export class Navbar {}
