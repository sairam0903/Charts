import {Component, OnInit} from '@angular/core';
import {ChartService} from '../services/chart.service';

@Component({
    selector: 'app-charts-home',
    templateUrl: './charts-home.component.html',
    styleUrls: ['./charts-home.component.scss']
})
export class ChartsHomeComponent implements OnInit {
    private chartSeries: any;
    
    constructor(private chartSvc: ChartService) {
    }
    
    ngOnInit() {
        this.getChart();
    }
    
    private getChart(): void {
        this.chartSvc.getChart().subscribe(response => {
            this.chartSeries = response;
        })
    }
    
}
