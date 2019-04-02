import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './login.component';
import {LoginForm} from './components/login-form/login-form-component.module';
import {SignUpForm} from './components/signup-form/signup-form-component.module';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        LoginForm,
        SignUpForm
    ],
    bootstrap: [
        LoginComponent
    ],
    exports: [
        LoginComponent
    ]
})
export class LoginPage {}
