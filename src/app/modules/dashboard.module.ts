import {NgModule} from '@angular/core';
import {SharedModule} from './shared.module';
import {DashboardRoutingModule} from './routing-modules/dashboard-routing.module';
import {DashboardComponent} from '../dashboard/dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule {}
