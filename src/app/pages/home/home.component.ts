import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { BigCardComponent } from '../../components/big-card/big-card.component';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';
import { SmallCardComponent } from "../../components/small-card/small-card.component";
import {CommonModule} from "@angular/common"

interface DataSmallCard {
  url : String,
  title : String,
}

@Component({
  selector: 'app-home',
  imports: [HeaderComponent,MenuTitleComponent, BigCardComponent, SmallCardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  list : DataSmallCard[] = [
    {
      "url" : "https://ideausher.com/wp-content/uploads/2022/08/Flutter-App-Development-Cover.webp",
      "title" : "Framework flutter vem com novidades",
    },
    {
      "url" : "https://xoticpc.com/cdn/shop/articles/1737039496_1737039146_1736453353_1736453197_1736453089_1736453069_1736453028_1736453004_1736452975_1736452962_1736452907_1736452710_partner-social-bnr-5090_4ce4df46-6c9b-4809-aa46-e48_797803a9-3ff3-416d-8683-eb15a3a3dafd.jpg?v=1740687278",
      "title" : "Nvidia lança nova RTX 5090",
    },
  ]
  constructor(){
    
  }
}
