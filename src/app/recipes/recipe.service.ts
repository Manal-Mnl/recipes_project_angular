import { Recipe } from './recipe.model';

export class RecipeService {
  recipes: Recipe[] = [
    new Recipe(
      'Test recipe',
      'This is for testing purposes',
      'https://hips.hearstapps.com/hmg-prod/images/delish-202002-pozole-0392-landscape-pf-1582315071.jpg?crop=1xw:0.8441943127962085xh;center,top&resize=1200:*'
    ),
    new Recipe(
      'Test recipe 2',
      'This is for testing purposes also',
      'https://www.inspiredtaste.net/wp-content/uploads/2022/11/Fluffy-Pancakes-Recipe-Video.jpg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
