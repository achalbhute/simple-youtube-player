import { Component, OnInit, Input,Output , EventEmitter} from '@angular/core';
import { MyserviceService} from './../myservice.service';

@Component({
  selector: 'app-video-list-item',
  templateUrl: './video-list-item.component.html',
  styleUrls: ['./video-list-item.component.css']
})
export class VideoListItemComponent implements OnInit {
  @Input() video;
  @Input() index;
  // @Output() selected :EventEmitter<string> = new EventEmitter<string>();
  
  // jump(){
  //   this.selected.emit(this.video);
    
  // }
  constructor(
    private _myserviceService: MyserviceService) { }
    jumpService(){
      console.log('jumpservice')
      this._myserviceService.jumpService(this.index);
    }
  ngOnInit():any {
    ;
}

}
