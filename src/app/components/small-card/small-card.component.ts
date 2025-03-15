import { Component, Input } from '@angular/core';

interface SmallCardData{
  dataPost : String,
  description : String,
  url : String
}

@Component({
  selector: 'app-small-card',
  imports: [],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})

export class SmallCardComponent{
  @Input()
  imageUrl : String = ""
  @Input()
  title : String = ""
  constructor(){

  }
}
