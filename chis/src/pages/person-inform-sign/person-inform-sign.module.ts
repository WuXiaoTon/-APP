import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonInformSignPage } from './person-inform-sign';

@NgModule({
  declarations: [
    PersonInformSignPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonInformSignPage),
  ],
})
export class PersonInformSignPageModule {}
