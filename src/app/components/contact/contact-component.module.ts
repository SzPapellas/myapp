import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';
import {ContactComponent} from './contact.component';
import {ContactFooterBar} from './components/contact-footer-bar/contact-footer-bar.module';

@NgModule({
    declarations: [
        ContactComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        ContactFooterBar
    ],
    bootstrap: [
        ContactComponent
    ],
    exports: [
        ContactComponent
    ]
})
export class ContactPage {}
