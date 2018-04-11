import {Component} from '@angular/core';

@Component ({
  selector: 'header',
  template: '<h1>To Do List</h1>',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  title = 'header';
}
