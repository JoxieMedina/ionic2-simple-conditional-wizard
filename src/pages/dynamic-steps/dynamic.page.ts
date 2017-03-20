import { Content } from 'ionic-angular/umd';
import { Component } from '@angular/core';
import { NavController, AlertController, Events } from 'ionic-angular';

@Component({
    selector: 'dynamic-home',
    templateUrl: 'dynamic.page.html',

})
export class DynamicPage {
    step: any;
    stepCondition: any;
    stepDefaultCondition: any;
    currentStep: any;
    stepsArray: Array<Object> = [];
    constructor(public navCtrl: NavController, public alertCtrl: AlertController, public evts: Events) {
        /**
         * Step Wizard Settings
         */
        this.step = 1;//The value of the first step, always 1
        this.stepCondition = false;//For each step the condition is set to this value, Set to true if you don't need condition in every step
        this.stepDefaultCondition = this.stepCondition;//Save the default condition for each step
        //Let's create some dummy data for this case
        this.stepsArray =
            [
                {
                    title: 'Step 1',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                },
                {
                    title: 'Step 2',
                    content: 'At dolorem sed, porro amet corrupti consequatur dolore ea sequi similique maxime!'
                },
                {
                    title: 'Step 3',
                    content: 'Tempora eveniet nostrum asperiores vero facere voluptatum adipisci minus magnam.'
                }
            ];
        //You can subscribe to the Event 'step:changed' to handle the current step
        this.evts.subscribe('step:changed', step => {
            //Handle the current step if you need
            this.currentStep = step[0];
            //Set the step condition to the default value
            this.stepCondition = this.stepDefaultCondition;
        });
        this.evts.subscribe('step:next', () => {
            //Do something if next
            console.log('Next pressed: ', this.currentStep);
        });
        this.evts.subscribe('step:back', () => {
            //Do something if back
            console.log('Back pressed: ', this.currentStep);
        });
    }
    /**
     * Demo functions
     */
    onFinish() {
        this.alertCtrl.create({
            message: 'Wizard Finished!!',
            title: 'Congrats!!',
            buttons: [{
                text: 'Ok'
            }]
        }).present();
    }

    toggleCondition(_condition) {
        this.stepCondition = _condition.checked;
    }



}
