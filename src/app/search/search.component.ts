import { Component, OnInit ,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

@Output() search :EventEmitter<string> = new EventEmitter<string>();
searchtext:string;
  constructor() { }
  ngOnInit() {
  }
  pushMe(){
    console.log("searched :  {{search}}"+ this.searchtext);
    this.search.emit(this.searchtext);
  }

}
