import {Recipe} from '../recipes/recipe.model';
import {Subject} from 'rxjs';
import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';

@Injectable({providedIn: 'root'})
export class RecipeService {
  recipesChanges = new Subject<Recipe[]>();
  private recipes = [];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanges.next(this.recipes.slice());
  }

  editRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
  }

  deleteRecipe(index: number) {
    if (index > -1) {
      this.recipes.splice(index, 1);
    }
    this.recipesChanges.next(this.recipes.slice());
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanges.next(this.recipes.slice());
  }
}

/*private recipes: Recipe[] = [
  new Recipe('Sushi Roll',
    'California Sushi Roll',
    'https://www.publicdomainpictures.net/pictures/160000/nahled/california-roll.jpg',
    [
      new Ingredient('sushi rice', 1),
      new Ingredient('seaweed', 1),
      new Ingredient('crab', 2),
      new Ingredient('cucumber', 1),
      new Ingredient('avocado', 1),
      new Ingredient('wasabi', 1),
      new Ingredient('ginger', 1)
    ]
  ),
  new Recipe('Juicy Burger',
    'Nice juicy bacon burger',
    'https://live.staticflickr.com/1279/678872722_43718bf6c8_z.jpg',
    [
      new Ingredient('burger bun', 1),
      new Ingredient('ground beef', 3),
      new Ingredient('lettuce', 1),
      new Ingredient('tomato', 1),
      new Ingredient('bacon', 3),
      new Ingredient('pickles', 3),
      new Ingredient('ketchup', 1)
    ]
  )];*/

