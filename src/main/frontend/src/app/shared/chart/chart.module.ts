import {NgModule} from '@angular/core';
import {ChartModule} from 'angular2-highcharts';
import {ChartComponent} from './chart.component';
import {HighchartsStatic} from 'angular2-highcharts/dist/HighchartsService';

// To make high charts work, we need to import by 'require'.
export declare let require: any;

export function highChartsFactory() {
    const highCharts = require('highcharts/highstock');
    highCharts.setOptions({
        colors: ['#4a959e', '#4B586E', '#BE3144', '#1c7ca1', '#517c5a', '#646ECB', '#796465', '#C79ECF', '#11CBD7', '#ADACA7', '#04536C']
    });
    highCharts.getOptions().colors = highCharts.map(highCharts.getOptions().colors, function (color) {
        return {
            radialGradient: {
                cx: 0.5,
                cy: 0.3,
                r: 0.7
            },
            stops: [
                [0, color],
                [1, highCharts.Color(color).brighten(-0.3).get('rgb')]
            ]
        };
    });
    return highCharts;
}

@NgModule({
    imports: [
        ChartModule
    ],
    
    declarations: [
        ChartComponent
    ],
    
    exports: [
        ChartModule,
        ChartComponent
    ],
    
    providers: [
        {provide: HighchartsStatic, useFactory: highChartsFactory}
    ]
})

export class ChartsModule {
}
