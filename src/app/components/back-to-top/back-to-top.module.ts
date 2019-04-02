import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BackToTopComponent} from './back-to-top.component';

@NgModule({
    declarations: [
        BackToTopComponent
    ],
    imports: [
        CommonModule
    ],
    bootstrap: [
        BackToTopComponent
    ],
    exports: [
        BackToTopComponent
    ]
})
export class BackToTop {}
