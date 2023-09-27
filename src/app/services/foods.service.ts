import { Injectable } from '@angular/core';
import { Food } from '../shared/food';
import { sample_foods, sample_tags } from 'src/assets/data';
import { Tag } from '../shared/tag';

@Injectable({
  providedIn: 'root',
})
export class FoodsService {
  constructor() {}
  getAll(): Food[] {
    return sample_foods;
  }
  searchFood(searchText: string) {
    return this.getAll().filter((food) => {
      return food.name?.toLowerCase().includes(searchText.toLowerCase());
    });
  }
  getAllTags(): Tag[] {
    return sample_tags;
  }

  getAllFoodByTag(tagName: string): Food[] {
    return tagName === 'All'
      ? this.getAll()
      : this.getAll().filter((food) => {
          return food.tags?.includes(tagName);
        });
  }
  getFoodById(id:string){
    return this.getAll().find((food)=>{
      return (food.id === id) 
    })?? new Food()
      }
}
