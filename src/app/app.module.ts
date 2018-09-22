import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import {MatExpansionModule} from '@angular/material/expansion';

import { AppComponent } from "./app.component";
import { AddRecipesComponent } from "./components/add-recipes/add-recipes.component";
import { AllRecipesComponent } from "./components/all-recipes/all-recipes.component";
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';

const appRoutes: Routes = [
  {path: "add-recipe", component: AddRecipesComponent},
  {path: "all-recipes", component: AllRecipesComponent},
  {path: "", redirectTo: "/all-recipes", pathMatch: "full"}
];

@NgModule({
  declarations: [
    AppComponent,
    AddRecipesComponent,
    AllRecipesComponent,
    RecipeDetailsComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyB7uKzOs87rrdqRa607ngxfNQakEngh9Es",
      authDomain: "food-app-29608.firebaseapp.com",
      databaseURL: "https://food-app-29608.firebaseio.com",
      projectId: "food-app-29608",
      storageBucket: "food-app-29608.appspot.com",
      messagingSenderId: "1017800605833"
    }),
    AngularFirestoreModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
