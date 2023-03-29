import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-autocomp',
  templateUrl: './autocomp.component.html',
  styleUrls: ['./autocomp.component.css']
})
export class AutocompComponent {
  states:any;
  keyword = 'state';
  constructor(private http:HttpClient){
    http.get("http://awsmaster.mahamining.com/master/states/GetState")
    
    .subscribe((result:any)=>{
      // console.log(result.responseData);
      
      this.states  = result.responseData
      
    })
  }

  selectEvent(item:any) {
    console.log('Selected item', item);
  }

 

  
}
