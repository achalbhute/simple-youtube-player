import { Component, Injectable, Input } from '@angular/core';
import  YTSearch from 'youtube-api-search'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent {

  @Input() search : string;
  title = 'app';
  data  = [];//[{'snippet':{'title':'Loading'}}];
  theapikey='AIzaSyCvqFdQ41Z_qPSMPXJQjJHNu7Gz1J0lm70';

  constructor(){
    console.log("searched : "+ this.search);
    this.searchYoutube('');
  }
  searchYoutube(term){
    YTSearch({key:this.theapikey, term:term}, (data)=>{
      this.data = data;
      console.log(data);
  });
  }
  onSearchChange(event){
    this.searchYoutube(event);
  }
  getData(){
    if(this.data.length > 0)
    return this.data;
    else return null
  }

}
