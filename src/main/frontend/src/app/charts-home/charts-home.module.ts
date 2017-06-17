import {NgModule} from '@angular/core';
import {ChartsRoutingModule} from './charts-routing.module';
import {SharedModule} from '../shared/shared.module';

import {ChartsHomeComponent} from './home-component/charts-home.component';

@NgModule({
    imports: [
        ChartsRoutingModule,
        SharedModule
    ],
    declarations: [
        ChartsHomeComponent
    ],
    providers: [
    ]
})

export class ChartsHomeModule {}
