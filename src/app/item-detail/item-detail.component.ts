import { Component, OnInit ,Input} from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  title = "kitty";
  detail = "video just for test";
  @Input('video') video;

  constructor() { 
    console.log(this.video);
  }
  getVideoTitle(){
    if(typeof this.video === 'undefined'){
      return "Loading";
    }
    return this.video.snippet.title;
  }
  getThumbnail(){
    if(typeof this.video === 'undefined'){
      return "Loading";
    }
    return this.video.snippet.thumbnails.high.url
  }
  getVideoURL(){
    return `https://www.youtube.com/embed/${this.video.id.videoId}`;
  }
  ngOnInit() {
  }

}
 