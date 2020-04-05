import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from '../../dashboard/dashboard.component';
import {NgModule} from '@angular/core';
import {AuthGuard} from '../../auth/auth.guard';

const routes: Routes =
  [
    { path: '', canActivate: [AuthGuard], component: DashboardComponent }
  ];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule {}
