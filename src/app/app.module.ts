import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DynamicPage } from '../pages/dynamic-steps/dynamic.page';
import { IonSimpleWizard } from '../pages/ion-simple-wizard/ion-simple-wizard.component';
import { IonSimpleWizardStep } from '../pages/ion-simple-wizard/ion-simple-wizard.step.component';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DynamicPage,
    IonSimpleWizard,
    IonSimpleWizardStep
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, DynamicPage

  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
