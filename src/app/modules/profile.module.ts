import {NgModule} from '@angular/core';
import {SharedModule} from './shared.module';
import {ProfileComponent} from '../profile/profile.component';
import {ProfileRoutingModule} from './routing-modules/profile-routing.module';

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    ProfileRoutingModule,
    SharedModule
  ]
})
export class ProfileModule {}
