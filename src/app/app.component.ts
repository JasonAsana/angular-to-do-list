import { Component } from '@angular/core';
import {HeaderComponent} from './../header/header.component'
import { InputComponent} from './../list/input.component'
import { ItemListComponent} from './../list/itemlist.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
