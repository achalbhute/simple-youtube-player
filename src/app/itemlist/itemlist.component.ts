import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.css']
})
export class ItemlistComponent implements OnInit {

  @Input('videos') videos;
  constructor() { }

  getVideoTitle(i){
    if(typeof this.videos === 'undefined'){
      return "Loading";
    }
    return this.videos[i].snippet.title;
  }
  getThumbnail(i){
    if(typeof this.videos === 'undefined'){
      return "Loading";
    }
    return this.videos[i].snippet.thumbnails.high.url
  }

  ngOnInit() {
  }

}
