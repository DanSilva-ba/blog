import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { BigCardComponent } from '../../components/big-card/big-card.component';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';
import { SmallCardComponent } from "../../components/small-card/small-card.component";
import {CommonModule} from "@angular/common"
@Component({
  selector: 'app-home',
  imports: [HeaderComponent,MenuTitleComponent, BigCardComponent, SmallCardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  list : String[] = ["mnada","ssss",""]
  constructor(){
    
  }
}
