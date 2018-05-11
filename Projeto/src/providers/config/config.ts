
import { Injectable } from '@angular/core';

@Injectable()//injecao de dependencia tem que passar em outro lugar pra funicionar
export class ConfigProvider {
  
  
public config={
  showSlide:false,
  name:"",
  username:""


}  
  
  
  constructor() {
    console.log('Hello MovieProvider Provider');
  }

//recupera os dados do localstorage
getConfigData():any{
    
   return localStorage.getItem("config");//recupera o config
}
//grava os dados do localstorage ?opcional:nao e obrigado a mandar o parametro
setConfigData(showSlide?:boolean,name?:string,username?:string){
   
   let config={//vai gravar a informaçao aqui
      showSlide:false,
      name:"",
      username:""

   }
   if (showSlide){//se mandar showSlide atualiza showSlide e manda showSlide
     config.showSlide = showSlide;
   }
   if (name){
    config.name = name;//se mandar name atualiza name manda name 
  }
  if (username){
    config.username = username;//se mandar username atualiza username manda username 
  }
// JSON localStorage nao aceita,por isso passa para string
localStorage.setItem("config",JSON.stringify(config));
//localstorage so grava string, ele esta gravando o config
}




}
