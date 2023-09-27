import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { TagComponent } from './components/pages/tag/tag.component';
import { FoodpageComponent } from './components/pages/foodpage/foodpage.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';

const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'search/:searchText', component:HomeComponent},
  { path: 'tag/:tag', component:HomeComponent},
  { path: 'foodpage/:id', component: FoodpageComponent},
  { path: 'cart-page', component: CartPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
