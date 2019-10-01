import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  set;
  data;
  th;
  constructor(private ht:HttpClient){

  }
  ngOnInit(){
    this.ht.get("https://hn.algolia.com/api/v1/search_by_date?tags=story").subscribe(res=>{
   this.set=res
  this.data=this.set.hits
   })
  }
  button(id){
    console.log(id)
   this.th=id;
  }
}

