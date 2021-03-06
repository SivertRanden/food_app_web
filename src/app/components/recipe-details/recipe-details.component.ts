import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../models/recipe';
import { Observable } from 'rxjs';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  
  
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onDeleteClick() {
    this.recipeService.deleteRecipe(this.recipe.id);
  }

}
