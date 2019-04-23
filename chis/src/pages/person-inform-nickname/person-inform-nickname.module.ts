import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonInformNicknamePage } from './person-inform-nickname';

@NgModule({
  declarations: [
    PersonInformNicknamePage,
  ],
  imports: [
    IonicPageModule.forChild(PersonInformNicknamePage),
  ],
})
export class PersonInformNicknamePageModule {}
