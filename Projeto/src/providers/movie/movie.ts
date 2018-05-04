
import { toObservable } from '@angular/forms/src/validators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()//injecao de dependencia tem que passar em outro lugar pra funicionar
export class MovieProvider {
  public base = "https//api.themoviedb.org/3";
  constructor(public http: HttpClient) {
    console.log('Hello MovieProvider Provider');
  }

PegaUltimosFilmes(){
  return this.http.get(this.base + "/movie/latest");//http e um tipo observable


}
}
