import {NgModule} from '@angular/core';
import {ChartModule} from 'angular2-highcharts';
import {ChartComponent} from './chart.component';

// To make high charts work, we need to import by 'require'.
declare let require: any;

@NgModule({
    imports: [
        ChartModule.forRoot(
            require('highcharts/highstock')
        )
    ],
    
    declarations: [
        ChartComponent
    ],
    
    exports: [
        ChartModule,
        ChartComponent
    ]
})

export class ChartsModule {
}
