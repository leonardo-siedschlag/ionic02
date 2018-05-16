import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';


/**
 * Generated class for the FilmeDetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filme-detalhes',
  templateUrl: 'filme-detalhes.html',
  // providers:[MovieProvider]
})
export class FilmeDetalhesPage {
  public filme;
  public filmeId;
  // public movieProvider:MovieProvider;
  constructor(public navCtrl: NavController, public navParams: NavParams, public movieProvider: MovieProvider) {
  }

  ionViewDidLoad() {
    this.filmeId = this.navParams.get("id");//isso vem la do feed.ts
                                          //pegando o parametro id da funcao abrirDetalhes
   
  this.movieProvider.PegaId(this.filmeId).subscribe(

    data=>{
        
        this.filme = data
        console.log("retorno com sucesso")
        console.log(data)

    },error=>{

      console.log("erro")
    }
  )
   
   
                                          // this.movieProvider.PegaDetalhes(this.filmeId).subscribe(data=>{//pegando a resposta direto do HTTP
       // let retorno=(data as any);
        //console.log(retorno)                                                        //HTTP E U OBSERVABLE
                                                                //TEM SUBSCRIBE,QUE AVISA QUANDO
                                                                //RECEBER RESPOSTA DO WEB    

   // },error=>{
      // console.log("errou")
   // });
    
  
}
}
