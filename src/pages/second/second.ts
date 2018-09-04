import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { variable } from '@angular/compiler/src/output/output_ast';
import { PEOPLE } from '../../mocks/person.mocks';

/**
 * Generated class for the SecondPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-second',
  templateUrl: 'second.html',
})
export class SecondPage {
  name: string;
  peopleList=PEOPLE;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name=navParams.get("variable");

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecondPage');
  }

}
