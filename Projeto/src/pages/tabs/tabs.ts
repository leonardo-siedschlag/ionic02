import { Component } from '@angular/core';


import { HomePage } from '../home/home';
import { IntroPage } from '../intro/intro';
import { FeedPage } from '../feed/feed';
import { ConfiguracaoPage } from '../configuracao/configuracao';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
 
  tab4Root = IntroPage;
  tab5Root = FeedPage;
  tab6Root = ConfiguracaoPage;
  constructor() {

  }
}
