import {Ingredient} from "../shared/ingredient.model";
import {EventEmitter, OnInit} from "@angular/core";

export class ShoppingListService{
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]){
    // for(let ingr of ingredients)
    //   this.addIngredient(ingr);

    this.ingredients.push(...ingredients)
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
