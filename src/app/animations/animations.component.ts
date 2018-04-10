import { Component, OnInit } from '@angular/core';
import { fade } from './animations';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css'],
  animations: [
    fade
  ]
})
export class AnimationsComponent {

  elements = [
    { title: 'test1' },
    { title: 'test2' },
    { title: 'test3' },
    { title: 'test4' }
  ];

  remove(element) {
    let index = this.elements.indexOf(element);
    this.elements.splice(index, 1);
  }

}
