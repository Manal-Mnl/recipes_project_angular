import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();  // Subject pour émettre les recettes

  private recipes: Recipe[] = [];  // Tableau des recettes
  private url = 'http://localhost:5000/recipes';  // URL de l'API qui pointe vers db.json

  constructor(
    private http: HttpClient,
    private shoppingListService: ShoppingListService
  ) {}

  // Fonction pour récupérer les recettes depuis db.json via GET
  setRecipes() {
    this.http.get<Recipe[]>(this.url).subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;  // Met à jour les recettes avec celles récupérées depuis le serveur
        this.recipeChanged.next(this.recipes);  // Émet les recettes
      },
      (error) => {
        console.error('Erreur lors de la récupération des recettes:', error);
      }
    );
  }

  // Fonction pour obtenir toutes les recettes
  getRecipes() {
    return this.recipes.slice();  // Retourne une copie des recettes
  }

  // Fonction pour obtenir une recette spécifique par son index
  getRecipe(index: number) {
    return this.recipes[index];
  }

  // Fonction pour ajouter des ingrédients à la liste de courses
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  // Fonction pour ajouter une nouvelle recette (requête POST)
  addRecipe(recipe: Recipe) {
    this.http.post<Recipe>(this.url, recipe).subscribe(
      (newRecipe: Recipe) => {
        this.recipes.push(newRecipe);  // Ajoute la recette au tableau local
        this.recipeChanged.next(this.recipes.slice());  // Émet les recettes mises à jour
      },
      (error) => {
        console.error('Erreur lors de l\'ajout de la recette :', error);
      }
    );
  }

  // Fonction pour mettre à jour une recette existante (requête PUT)
  updateRecipe(index: number, newRecipe: Recipe) {
    this.http.put<Recipe>(`${this.url}/${index}`, newRecipe).subscribe(
      (updatedRecipe: Recipe) => {
        this.recipes[index] = updatedRecipe;  // Met à jour la recette dans le tableau local
        this.recipeChanged.next(this.recipes.slice());  // Émet les recettes mises à jour
      },
      (error) => {
        console.error('Erreur lors de la mise à jour de la recette :', error);
      }
    );
  }

  // Fonction pour supprimer une recette (requête DELETE)
  deleteRecipe(index: number) {
    this.http.delete(`${this.url}/${index}`).subscribe(
      () => {
        this.recipes.splice(index, 1);  // Supprime la recette du tableau local
        this.recipeChanged.next(this.recipes.slice());  // Émet les recettes mises à jour
      },
      (error) => {
        console.error('Erreur lors de la suppression de la recette :', error);
      }
    );
  }
}
