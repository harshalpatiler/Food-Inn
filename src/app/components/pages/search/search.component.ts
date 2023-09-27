import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText:string=''

  constructor(private router:Router, activatedRoute:ActivatedRoute){
    activatedRoute.params.subscribe((param)=>{
        this.searchText = param.searchText
    })
  }
  search(text:string){
    if(text){
      this.router.navigateByUrl('/search/'+ text);
    }
  }
}
