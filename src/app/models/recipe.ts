import {Nutrient} from "./nutrient";
import {Ingredient} from "./ingredient";

export class Recipe {
    id: string;
    name: string;
    mealType: string;
    tags: string[];
    imageUrl: string;
    description: string;
    ingredients: Ingredient[];
    steps: string[];
    nutrients: Nutrient[];
    allergens: string[];

	constructor($id?: string, $name?: string, $mealType?: string, $tag?: string[], $imageUrl?: string, $description?: string, $ingredients?: Ingredient[], $steps?: string[], $nutrients?: Nutrient[], $allergens?: string[]) {
        this.id = $id || "";
        this.name = $name || "";
		this.mealType = $mealType || "";
		this.tags = $tag || [];
		this.imageUrl = $imageUrl || "";
		this.description = $description || "";
		this.ingredients = $ingredients || [];
		this.steps = $steps|| [""];
		this.nutrients = $nutrients|| [];
		this.allergens = $allergens|| [];
    }

    //firestore doesnt support custom classes, so convert to object.
    getData(): object {
        const data = {
            name: this.name,
            mealType: this.mealType,
            tags: this.tags,
            imageUrl: this.imageUrl,
            description: this.description,
            ingredients: this.ingredients.map(ingredient => ingredient.getData()),
            steps: this.steps,
            nutrients: this.nutrients.map(nutrient => nutrient.getData()),
            allergens: this.allergens
        };
        return data;
    }

    setValuesFromFirestoreData(id: string, data: any) {
        this.id = id;
        this.name = data.name;
		this.mealType = data.mealType
		this.tags = data.tags;
		this.imageUrl = data.imageUrl;
		this.description = data.description;
		this.ingredients = data.ingredients;
		this.steps = data.steps;
		this.nutrients = data.nutrients;
		this.allergens = data.allergens;
    }
    
}