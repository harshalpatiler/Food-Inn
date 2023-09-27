import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FoodsService } from 'src/app/services/foods.service';
import { Food } from 'src/app/shared/food';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent {
  food!: Food
  constructor(activateRoute:ActivatedRoute, private api: FoodsService, private router: Router, private cartService: CartService){
    activateRoute.params.subscribe((param)=>{
        this.food = this.api.getFoodById(param.id)
    })

  }
  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}
