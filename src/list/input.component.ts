import { Component } from '@angular/core';
import { ItemListComponent} from './itemlist.component';

@Component ({
  selector: 'inputitem',
  template: `
    <ul>
    <li *ngFor = "let item of itemlist">{{item}}</li>
    <ul>
    <input #newItem
    (keyup.enter)="addItem(newItem.value); newItem.value = ''">
  `
})

export class InputComponent {

  itemlist = [];

  addItem(newItem: string) {
    this.itemlist.push(newItem);
  }
}
