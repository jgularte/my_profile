import {RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from '../../profile/profile.component';
import {NgModule} from '@angular/core';
import {AuthGuard} from '../../auth/auth.guard';

const routes: Routes =
  [
    { path: '', canActivate: [AuthGuard], component: ProfileComponent }
  ];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProfileRoutingModule {}
