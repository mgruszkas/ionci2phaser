import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
declare var Phaser: Phaser;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    console.log(Phaser);
  }

}
