import { Injectable } from '@angular/core';
import { Food } from '../shared/food';
import { sample_foods } from 'src/assets/data';

@Injectable({
  providedIn: 'root'
})
export class FoodsService {

  constructor() { }
  getAll(): Food[]{
      return sample_foods
  }
  searchFood(searchText:string){
    return this.getAll().filter((food)=>{
      return food.name?.toLowerCase().includes(searchText.toLowerCase());
    })
  }
}
