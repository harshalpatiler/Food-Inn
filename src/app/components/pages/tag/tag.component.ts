import { Component } from '@angular/core';
import { FoodsService } from 'src/app/services/foods.service';
import { Tag } from 'src/app/shared/tag';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent {

   tags?:Tag[]
  constructor(private api: FoodsService){
    this.tags = this.api.getAllTags()
    console.log(this.tags)
  }
}
