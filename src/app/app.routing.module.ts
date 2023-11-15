import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {RecipesComponent} from "./recipes/recipes.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RecipeDetailStartComponent} from "./recipes/recipe-detail/recipe-detail-start/recipe-detail-start.component";
import {RecipeDetailComponent} from "./recipes/recipe-detail/recipe-detail.component";

const routes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'recipes', component: RecipesComponent, children:[
      {path: '', component: RecipeDetailStartComponent},
      {path: ':id', component: RecipeDetailComponent}
    ]
  },
  {path: 'shopping-list', component: ShoppingListComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
