import { Component, Injectable, Input ,ChangeDetectorRef} from '@angular/core';
import  YTSearch from 'youtube-api-search'
import {MyserviceService} from './myservice.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MyserviceService]
})

@Injectable()
export class AppComponent {

  @Input() search : string;
  title = 'app';
  data  = [];//[{'snippet':{'title':'Loading'}}];
  theapikey='AIzaSyCvqFdQ41Z_qPSMPXJQjJHNu7Gz1J0lm70';
  currentVideo = 0;
  constructor(private _sharedService: MyserviceService,private cd: ChangeDetectorRef){
    console.log("searched : "+ this.search);
    this.searchYoutube('');
    this._sharedService.videosource$.subscribe(d=>{
      this.currentVideo = d;
      console.log(this.currentVideo);
    })
  }
  searchYoutube(term){
    YTSearch({key:this.theapikey, term:term}, (data)=>{
      this.data = data;
      this.currentVideo = 0;
      
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
