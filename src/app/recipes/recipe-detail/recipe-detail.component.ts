import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe.model";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";
import {RecipeService} from "../recipe.service";
import {ActivatedRoute, Params, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit{
  id: number;
  recipe: Recipe;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id']
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    )
  }

  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients)
  }
}
