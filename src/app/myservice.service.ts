import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MyserviceService {

  private videosource = new Subject<number>();
  
    // Observable string stream
    videosource$ = this.videosource.asObservable();

  jumpService(index){
    this.videosource.next(index);
  }
  constructor() { }

}
