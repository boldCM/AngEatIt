import { Component } from '@angular/core';

// Fetch-Möglichkeit:
// const parseJSON = (resp) => (resp.json ? resp.json() : resp);

// // checks if a network request came back fine, and throws an error if not

// const checkStatus = (resp) => {
//   if (resp.status >= 200 && resp.status < 300) {
//     return resp;
//   }
//   return parseJSON(resp).then((resp) => {
//     throw resp;
//   });
// };

// const headers = {
//   'Content-Type': 'application/json',
// };

@Component({
  selector: 'app-recipe-list-page',
  templateUrl: './recipe-list-page.component.html',
  styleUrls: ['./recipe-list-page.component.scss'],
})
export class RecipeListPageComponent {
  constructor() {}
}

// 3 MÖglichkeiten:
// axios
// fetch
// graphql/apolloclient (s.recipe-list.component)

// FETCH-Möglichkeit:
// async ngOnInit(): Promise<void> {
//   try {
//     const recipes = await fetch('http://localhost:1337/api/recipes', {
//       method: 'GET',
//       headers: headers,
//     })
//       .then(checkStatus)
//       .then(parseJSON);
//     this.recipes = recipes;
//   } catch (error) {
//     console.error('es ist ein Fehler passiert: ', error);
//   }
// }
