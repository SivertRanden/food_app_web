import { Injectable } from '@angular/core';
import { Recipe } from './models/recipe';
import { AngularFirestoreDocument, AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipes: AngularFirestoreCollection<Recipe>;

  constructor(private db: AngularFirestore) { 
    this.recipes = db.collection<Recipe>("recipes");
  }

  async addRecipe(recipe: Recipe) {
    await this.recipes.add(<Recipe>recipe.getData());
  }

  async deleteRecipe(id: string) {
    await this.recipes.doc<Recipe>(id).delete();
  }

  async updateRecipe(recipe: Recipe) {
    await this.recipes.doc<Recipe>(recipe.id).update(recipe.getData());
  }
}
