import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-recipes',
  templateUrl: './add-recipes.component.html',
  styleUrls: ['./add-recipes.component.scss']
})
export class AddRecipesComponent implements OnInit {
  
  ingredientRowCounter: number[];
  stepRowCounter: number[];
  allergens: string[];
  allergensSelected: string[];
  tags: string[];
  tagsSelected: string[];

  constructor() {
    this.ingredientRowCounter = [];
    this.stepRowCounter = [];
    this.allergens = ["Fish", "Milk", "Nuts", "Gluten"];
    this.allergensSelected = [];
    this.tags = ["Vegan", "Vegetarian", "Low calories", "High protein", "Halal"];
    this.tagsSelected = [];
  }

  ngOnInit() {
  }

  addRow(type: string) {
    if(type === "ingredient") {
      this.ingredientRowCounter.push(this.ingredientRowCounter.length);
    } else {
      this.stepRowCounter.push(this.stepRowCounter.length);
    }
  }

  removeRow(type: string) {
    if(type === "ingredient") {
      this.ingredientRowCounter.pop();
    } else {
      this.stepRowCounter.pop();
    }
  }

  handleToggleClick(event, type) {
    this.toggleClass(event);
    let item: string = event.target.innerHTML;
    let selectedItems = type === 'allergen' ? this.allergensSelected : this.tagsSelected;
    let index = selectedItems.indexOf(item);
    if(index === -1) {
      selectedItems.push(item);
    } else {
      selectedItems.splice(index, 1);
    }
    console.log(this.allergensSelected);
    console.log(this.tagsSelected);
  }

  toggleClass(event) {
    if(event.target.className === "input-row-toggle-box") {
      event.target.className = "input-row-toggle-box-selected";
    } else {
      event.target.className = "input-row-toggle-box";
    }
  }

}
