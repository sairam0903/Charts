import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
    selector: 'app-chart',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnChanges, OnInit {
    
    @Input() seriesData;
    @Input() type;
    @Input() title;
    @Input() id;
    @Input() loading;
    @Input() allowPointSelect;
    @Output() clicked = new EventEmitter();
    
    chart: any;
    options: any;
    
    constructor() {
        
        const self = this;
        
        self.options = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                backgroundColor: null,
            },
    
            rangeSelector: {
                selected: 1
            },
            
            title: {
                text: ''
            },
            
            exporting: {
                enabled: true
            },
            
            credits: {
                enabled: false
            },
            
            loading: {
                hideDuration: 500,
                showDuration: 500
            },
            
            plotOptions: {
                series: {
                    allowPointSelect: false,
                    cursor: 'pointer',
                    events: {
                        click: function (event) {
                            if (self.options.plotOptions.series.allowPointSelect) {
                                self.clicked.emit(event);
                            }
                        }
                    }
                }
            },
            
            series: [{
                data: [],
            }]
        };
    }
    
    ngOnInit() {
        this.options.chart.type = this.type;
        this.options.chart.renderTo = this.id;
        this.options.title.text = this.title;
        this.options.plotOptions.series.allowPointSelect = this.allowPointSelect;
    }
    
    ngOnChanges(changes: SimpleChanges) {
        if (changes.seriesData) {
            this.updateSeriesData(changes.seriesData.currentValue);
        }
        if (changes.title) {
            this.updateTitle(changes.title.currentValue);
        }
        if (changes.loading) {
            this.updateLoading(changes.loading.currentValue);
        }
        if (changes.allowPointSelect) {
            this.updatePointSelect(changes.allowPointSelect.currentValue);
        }
    }
    
    updatePointSelect(value: boolean) {
        this.options.plotOptions.series.allowPointSelect = value;
    }
    
    reFlowChart() {
        if (this.chart) {
            setTimeout(() => {
                this.chart.reflow();
            }, 0);
        }
    }
    
    updateTitle(title: string): void {
        if (this.chart && this.chart.title) {
            this.chart.setTitle({text: title});
        }
    }
    
    updateLoading(loading: boolean): void {
        if (this.chart) {
            if (loading) {
                this.chart.showLoading(`Loading...`)
            } else {
                this.chart.hideLoading();
                this.reFlowChart();
            }
        }
    }
    
    updateSeriesData(data: Array<any>): void {
        if (this.chart && this.chart.series) {
            this.chart.series[0].setData(data);
        } else {
            this.options.series[0].data = data;
        }
    }
    
    saveInstance(chartInstance): void {
        this.chart = chartInstance;
    }
}
