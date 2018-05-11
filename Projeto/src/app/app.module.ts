import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IntroPage } from '../pages/intro/intro';
import { FeedPage } from '../pages/feed/feed';
import { MovieProvider } from '../providers/movie/movie';
import { HttpClientModule } from '@angular/common/http';
import { ConfiguracaoPageModule } from '../pages/configuracao/configuracao.module';
import { SobrePageModule } from '../pages/sobre/sobre.module';
import { PerfilPageModule } from '../pages/perfil/perfil.module';
import { PerfilPage } from '../pages/perfil/perfil';
import { FilmeDetalhesPageModule } from '../pages/filme-detalhes/filme-detalhes.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    IntroPage,
    FeedPage,
    
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    ConfiguracaoPageModule,
    SobrePageModule,
    PerfilPageModule,
    FilmeDetalhesPageModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    IntroPage,
    FeedPage
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MovieProvider
  ]
})
export class AppModule {}
