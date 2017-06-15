import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule
    ],
    declarations: [],
    exports: [
        CommonModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule
    ],
    providers: []
})

export class SharedModule {
}
