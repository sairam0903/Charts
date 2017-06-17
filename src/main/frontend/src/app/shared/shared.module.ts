import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {ChartsModule} from './chart/chart.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        ChartsModule
    ],
    declarations: [],
    exports: [
        CommonModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        ChartsModule
    ],
    providers: []
})

export class SharedModule {
}
