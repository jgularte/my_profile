import {NgModule} from '@angular/core';
import {SharedModule} from './shared.module';
import {ProfileComponent} from '../profile/profile.component';
import {ProfileRoutingModule} from './routing-modules/profile-routing.module';
import {PersonalInfoPanelComponent} from '../profile/personal-info-panel/personal-info-panel.component';
import {ResumeViewerComponent} from '../profile/resume-viewer/resume-viewer.component';

@NgModule({
  declarations: [
    ProfileComponent,
    PersonalInfoPanelComponent,
    ResumeViewerComponent
  ],
  imports: [
    ProfileRoutingModule,
    SharedModule
  ]
})
export class ProfileModule {}
