import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { IntroPage } from '../pages/intro/intro';
import { FeedPage } from '../pages/feed/feed';
import { ConfigProvider } from '../providers/config/config'

@Component({
  templateUrl: 'app.html',
  providers: [
    ConfigProvider
  ]



})
export class MyApp {
  rootPage: any = IntroPage;//trocar IntroPage

  constructor(platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    configProvider: ConfigProvider
  ) {
    platform.ready().then(() => {

      let config = configProvider.getConfigData();//pega a informaçao

      if (config === null) {//se for nulo, e a primeira vez que ta abrindo a pagina 
        this.rootPage = IntroPage;
        configProvider.setConfigData(false);

      } else {
        this.rootPage = TabsPage;//se nao for nulo, vai pra TabsPage

      }

      console.log(config)
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
