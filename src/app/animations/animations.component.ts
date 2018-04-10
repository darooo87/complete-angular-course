import { Component, OnInit } from '@angular/core';
import { transition, style, animate, trigger, state } from '@angular/animations';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css'],
  animations: [
    trigger('fade', [
      
      state('void', style({ opacity: 0 })),

      transition('void => *', [
        animate(500)
      ]),

      transition('* => void', [
        animate(500)
      ])
    ])
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
