import { gql } from '@apollo/client/core';

export const RECIPE_QUERY = gql`
  query getName($id: ID!) {
    recipe(id: $id) {
      data {
        id
        attributes {
          name
        }
      }
    }
  }
`;

export const RECIPE_LIST_QUERY = gql`
  query getRecipeList {
    recipes {
      data {
        attributes {
          name
        }
      }
    }
  }
`;
