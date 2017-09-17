import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemlistComponent } from './itemlist/itemlist.component';
import { VideoListItemComponent } from './video-list-item/video-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ItemDetailComponent,
    ItemlistComponent,
    VideoListItemComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
