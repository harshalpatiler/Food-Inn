import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodsService } from 'src/app/services/foods.service';
import { Food } from 'src/app/shared/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods: Food[] =[]
  constructor( private api: FoodsService, activatedRoute:ActivatedRoute){
    activatedRoute.params.subscribe((param)=>{
      console.log(param.searchText)
    if(param.searchText){
     this.foods = this.api.searchFood(param.searchText)
    }
    else{
      this.foods = this.api.getAll()
    }
    })
      
     }
  ngOnInit() {
    
  }

}
