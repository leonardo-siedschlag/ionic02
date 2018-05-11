
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
  
  constructor(public http: HttpClient) {
    console.log('Hello MovieProvider Provider');
  }

PegaUltimosFilmes(){
  //return this.http.get("https://api.themoviedb.org/3/movie/latest?api_key=0f6128305fbf3f49e0c0577e7c84f288");//http e um tipo observable
  return this.http.get("https://api.themoviedb.org/3/movie/popular?api_key=0f6128305fbf3f49e0c0577e7c84f288")

}
}
