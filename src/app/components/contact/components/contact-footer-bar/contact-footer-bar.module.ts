import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactFooterBarComponent} from './contact-footer-bar.component';

@NgModule({
    declarations: [
        ContactFooterBarComponent
    ],
    imports: [
        CommonModule
    ],
    bootstrap: [
        ContactFooterBarComponent
    ],
    exports: [
        ContactFooterBarComponent
    ]
})
export class ContactFooterBar {}

