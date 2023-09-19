import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Test recipe',
      'This is for testing purposes',
      'https://hips.hearstapps.com/hmg-prod/images/delish-202002-pozole-0392-landscape-pf-1582315071.jpg?crop=1xw:0.8441943127962085xh;center,top&resize=1200:*',
      [new Ingredient('Oat Milk', 20), new Ingredient('Vegetables', 100)]
    ),
    new Recipe(
      'Test recipe 2',
      'This is for testing purposes also',
      'https://www.inspiredtaste.net/wp-content/uploads/2022/11/Fluffy-Pancakes-Recipe-Video.jpg',
      [new Ingredient('Chocolate', 30), new Ingredient('Milk', 50)]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
