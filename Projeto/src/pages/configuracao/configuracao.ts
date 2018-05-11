import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PerfilPage } from '../perfil/perfil';
import { SobrePage } from '../sobre/sobre';
import { HomePage } from '../home/home';



@IonicPage()
@Component({
  selector: 'page-configuracao',
  templateUrl: 'configuracao.html',
})
export class ConfiguracaoPage {
  rootPage=PerfilPage;
  constructor(public navCtrl: NavController, public navParams: NavParams,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfiguracaoPage');
  }
abrirPerfil(){
  this.navCtrl.push(PerfilPage)
//navCtrl e a navegacao entre as paginas
}
abrirSobre(){
  this.navCtrl.push(SobrePage)//vai a pagina Sobre
//navCtrl e a navegacao entre as paginas
}
fecharMenu(){

  this.navCtrl.push(HomePage)//vai pra homepage
}
}
