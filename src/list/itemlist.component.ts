import { Component } from '@angular/core';

@Component ({
  selector: 'itemlist',
  template: `
    <ul>
      <li *ngFor = "let item of itemList">{{item}}</li>
    </ul>
  `
})
export class ItemListComponent {

    itemList: string;

}
