import { Injectable } from '@angular/core';
import { Apollo, WatchQueryOptions } from 'apollo-angular';
import { map, Observable } from 'rxjs';
import { RECIPE_LIST_QUERY } from './recipe-list.graphql';

@Injectable({
  providedIn: 'root',
})
export class RecipeListService {
  constructor(private readonly apollo: Apollo) {}

  public getRecipeList(): Observable<any> {
    const options: WatchQueryOptions = {
      query: RECIPE_LIST_QUERY,
    };

    return this.apollo.watchQuery<any>(options).valueChanges.pipe(map((response) => response.data.recipes.data));
  }
}
