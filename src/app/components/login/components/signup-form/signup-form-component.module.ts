import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SignupFormComponent} from './signup-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        SignupFormComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule
    ],
    bootstrap: [
        SignupFormComponent
    ],
    exports: [
        SignupFormComponent
    ]
})
export class SignUpForm {}
