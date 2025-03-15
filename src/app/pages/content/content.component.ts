import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-content',
  imports: [CommonModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})

export class ContentComponent {
  imageUrl : String = "https://hd2.tudocdn.net/1109660?w=824&h=494"
  constructor(){

  }
}
