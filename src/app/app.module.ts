import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { AddRecipesComponent } from './add-recipes/add-recipes.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';

const appRoutes: Routes = [
  {path: 'add-recipe', component: AddRecipesComponent},
  {path: 'all-recipes', component: AllRecipesComponent},
  {path: '', redirectTo: '/all-recipes', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    AddRecipesComponent,
    AllRecipesComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
