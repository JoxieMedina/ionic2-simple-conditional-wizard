import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { BrowserModule } from '@angular//platform-browser';
import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, DynamicPage

  ],
  providers: [StatusBar,
    SplashScreen,{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
