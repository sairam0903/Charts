import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ChartService} from './services/chart.service';

import {ChartsHomeComponent} from './home-component/charts-home.component';

const routes: Routes = [
    {path: 'home', component: ChartsHomeComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
        ChartService
    ]
})

export class ChartsRoutingModule {
}
