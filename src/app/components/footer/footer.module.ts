import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './footer.component';
import {LanguageSelector} from '../language-selector/language-selector.module';

@NgModule({
    declarations: [
        FooterComponent
    ],
    imports: [
        CommonModule,
        LanguageSelector
    ],
    bootstrap: [
        FooterComponent
    ],
    exports: [
        FooterComponent
    ]
})
export class Footer {}
