import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { HeaderComponent} from './header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from "./recipes/recipe-list";
import { RecipeDetailComponent } from "./recipes/recipe-detail";
import { RecipeItemComponent } from "./recipes/recipe-list";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { ShoppingListAddComponent } from "./shopping-list/shopping-list-add.component";



@NgModule({
  imports: [ BrowserModule ],
  declarations: [AppComponent, HeaderComponent, RecipesComponent, RecipeListComponent, RecipeItemComponent ,RecipeDetailComponent, ShoppingListComponent ,ShoppingListAddComponent],
  bootstrap:    [AppComponent]
})
export class AppModule { }

