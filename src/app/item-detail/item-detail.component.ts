import { Component, OnInit, Input ,ChangeDetectorRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { MyserviceService } from './../myservice.service';


@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  @Input() video;
  // @Input('selected') selected;
  // constructor() { 
  //   console.log(this.video);
  //   // if(this.selected !== 'undefined'){
  //   //   this.video= this.selected;
  //   // }
  // }
  constructor(
    private _sharedService: MyserviceService,private sanitizer:DomSanitizer ) {
     }
  getVideoTitle() {
    if (typeof this.video === 'undefined') {
      return "Loading";
    }
    return this.video.snippet.title;
  }
  getThumbnail() {
    if (typeof this.video === 'undefined') {
      return "Loading";
    }
    return this.video.snippet.thumbnails.high.url;
  }
  getVideoURL() {
    //return "https://www.youtube.com/embed/"+this.video.id.videoId;
    console.log("https://www.youtube.com/embed/"+this.video.id.videoId);
    return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/"+this.video.id.videoId);
  }
  // ngOnInit() {
  // }
  
  ngOnInit(): any {
    // this._sharedService.videosource$.subscribe(d => { 
    //   this.video = d;
    //   console.log('afa');
    //   console.log(d);
    //   this.cd.detectChanges();
    // });
  }
  

}
