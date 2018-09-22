import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe';
import { AngularFirestore, QuerySnapshot } from "angularfire2/firestore";
import { RecipeService } from '../../recipe.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.scss']
})
export class AllRecipesComponent implements OnInit {
  loading: boolean = true;
  recipes: Observable<Recipe[]>;

  constructor(private db: AngularFirestore, private recipeService: RecipeService) {
   }

  ngOnInit() { 
    this.recipes = this.recipeService.recipes.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        let recipe: Recipe = new Recipe();
        recipe.setValuesFromFirestoreData(id, data);
        return recipe;
      }))
    );
    this.recipes.subscribe(() => this.loading = false);
  }

}
