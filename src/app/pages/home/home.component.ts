import { Component } from '@angular/core';
import { BigCardComponent } from '../../components/big-card/big-card.component';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';
import { SmallCardComponent } from "../../components/small-card/small-card.component";
import {CommonModule} from "@angular/common"
import { listSmallCard, listBigCard } from '../../data/data.mock';
import { DataSmallCard } from '../../entities/dataSmallCard';
import { DataBigCard } from '../../entities/dataBigCard';

@Component({
  selector: 'app-home',
  imports: [MenuTitleComponent, BigCardComponent, SmallCardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  listSmallCard : DataSmallCard[] = listSmallCard
  listBigCard : DataBigCard[] = listBigCard
  
  constructor(){
    
  }
}
