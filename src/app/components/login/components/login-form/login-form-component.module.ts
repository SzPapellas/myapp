import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form.component';
import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';

@NgModule({
    declarations: [
        LoginFormComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule
    ],
    bootstrap: [
        LoginFormComponent
    ],
    exports: [
        LoginFormComponent
    ]
})
export class LoginForm {}
