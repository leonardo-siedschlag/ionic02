import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

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
  providers:[
        MovieProvider  //faz o movie provider ser injetado

  ]
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
  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider:MovieProvider //eu preciso do objeto movie-provider 
    //o provider me arruma isso, que vem la de providers
  ) {
  }

  ionViewDidLoad() {   //isso vem la do provider
    this.movieProvider.PegaUltimosFilmes().subscribe(//tipo observable
     data=>{// => abre e fecha chave e com se fizesse uma funcao na mesma linha
          console.log(data)

     },error=>{
          console.log(error)

     }
     
    ) 
  }

}
