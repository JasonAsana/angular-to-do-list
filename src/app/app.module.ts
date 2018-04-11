import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './../header/header.component'
import { InputComponent} from './../list/input.component'
import { ItemListComponent} from './../list/itemlist.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputComponent,
    ItemListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
