import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Recipe } from "../../models/recipe";
import { Ingredient } from '../../models/ingredient';
import { Nutrient } from '../../models/nutrient';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-add-recipes',
  templateUrl: './add-recipes.component.html',
  styleUrls: ['./add-recipes.component.scss']
})
export class AddRecipesComponent implements OnInit {
  
  allergens: string[];
  allergensSelected: string[];
  tags: string[];
  tagsSelected: string[];
  newRecipe: Recipe;
  loading: boolean;

  constructor(private recipeService: RecipeService, private router: Router) {
    this.allergens = ["Fish", "Milk", "Nuts", "Gluten"];
    this.tags = ["Vegan", "Vegetarian", "Low calories", "High protein", "Halal"];
    this.newRecipe = new Recipe();
    this.newRecipe.ingredients.push(new Ingredient());
    this.newRecipe.nutrients.push(new Nutrient("carbohydrate"), new Nutrient("protein"), new Nutrient("fat"));
    this.loading = false;
  }

  ngOnInit() {
  }

  trackByFn(index: any, item: any) {
    return index;
 }

  addRow(type: string) {
    if(type === "ingredient") {
      this.newRecipe.ingredients.push(new Ingredient());
    } else if (type === "step") {
      this.newRecipe.steps.push("");
    }
  }

  removeRow(type: string) {
    if(type === "ingredient") {
      this.newRecipe.ingredients.pop();
    } else if (type === "step") {
      this.newRecipe.steps.pop();
    }
  }

  handleToggleClick(event, type) {
    this.toggleClass(event);
    let item: string = event.target.innerHTML;
    let selectedItems = type === 'allergen' ? this.newRecipe.allergens : this.newRecipe.tags;
    let index = selectedItems.indexOf(item);
    if(index === -1) {
      selectedItems.push(item);
    } else {
      selectedItems.splice(index, 1);
    }
  }

  toggleClass(event) {
    if(event.target.classList.contains("input-row-toggle-box")) {
      event.target.className = "input-row-toggle-box-selected";
    } else {
      event.target.className = "input-row-toggle-box";
    }
  }

  setNutrient(event, type) {
    if(type === "carb") {
      this.newRecipe.nutrients.push(new Nutrient("carbohydrates", event.target.value));
    }
  }

  onAddRecipeClick() {
    this.loading = true;
    this.recipeService.addRecipe(this.newRecipe).then( res => {
      this.loading = false;
      this.router.navigate(["/all-recipes"]);
    }).catch(error => {
      this.loading = false;
      console.log(error);
    });
  }

  onCancelClick() {
    this.router.navigate(["all-recipes"]);
  }

}
