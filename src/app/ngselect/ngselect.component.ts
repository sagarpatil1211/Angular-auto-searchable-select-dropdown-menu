import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ngselect',
  templateUrl: './ngselect.component.html',
  styleUrls: ['./ngselect.component.css']
})
export class NgselectComponent {
  datas:any;
  constructor(private http:HttpClient){
    http.get("https://gorest.co.in/public/v2/users")
    
    .subscribe((result:any)=>{
      // console.log(result);
      
      this.datas  = result
      
    })
  }

  title = '18_Searchable_dropdown';
  fruits = ["apple", "orange", "banana", "grapes"];
}
