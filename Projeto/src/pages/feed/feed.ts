import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  public objeto_intro = {//criaçao de objeto
    titulo:"Marty McFly",
    data:"November 5, 1955",
    descricao:"cada vez aumenta  a velocidade de carros hiper-sonicos devido seu alto grau de complexdiade",
    qntd_likes:12,
    qntd_coments:4,
    date:"11 ago go cs "
  } 
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
  }

}
