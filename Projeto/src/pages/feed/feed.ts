import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
import { FilmeDetalhesPage } from '../filme-detalhes/filme-detalhes';

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
  
  public lista = new Array<any>()//criando um objeto array de qualquer tipo  
                  //criando um objeto array de qualquer coisa, ele vira um objeto java script         
  constructor(public navCtrl: NavController, 
  public navParams: NavParams,
  private movieProvider:MovieProvider //eu preciso do objeto movie-provider 
    //o provider me arruma isso, que vem la de providers
  ) {
  }

  abrirDetalhes(){
     
    this.navCtrl.push(FilmeDetalhesPage);

  }
  
  ionViewDidLoad() {   //isso vem la do provider
    
    
    
    this.movieProvider.PegaUltimosFilmes().subscribe(//tipo observable
     
    data=>{// => abre e fecha chave e com se fizesse uma funcao na mesma linha
        
                          
            //this.lista_filmes = data;
            //console.log(obj)
            //console.log(obj);
            //this.lista_filmes = obj;
            //console.log(obj);  
     
      
        
      
        let obj = data as any
        
        console.log(obj)
        this.lista = obj.results;   
        
        //console.log(this.lista)
 
     },error=>{
          console.log(error)

     }
     
    ) 
  }

}
