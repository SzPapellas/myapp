import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileComponent} from './profile.component';

@NgModule({
    declarations: [
        ProfileComponent
    ],
    imports: [
        CommonModule
    ],
    bootstrap: [
        ProfileComponent
    ],
    exports: [
        ProfileComponent
    ]
})
export class ProfilePage {}
