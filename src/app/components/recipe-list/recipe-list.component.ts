import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipeName:string="KartoffelSalat"

  // TODO: KalenderIcon hinzufügen
  // TODO: Diamondline kreieren
  constructor() { }

  ngOnInit(): void {
  }

}
