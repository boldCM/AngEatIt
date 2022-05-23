import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipeListService } from './recipe-list.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  public recipeList$: Observable<any>;

  // TODO: KalenderIcon hinzufügen
  // TODO: Diamondline kreieren
  constructor(private readonly recipeListService: RecipeListService) {}

  ngOnInit(): void {
    this.recipeList$ = this.recipeListService.getRecipeList();
  }
}
