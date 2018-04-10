import { trigger, state, transition, style, animate, keyframes } from "@angular/animations";

export let fade = trigger('fade', [

    state('void', style({ opacity: 0 })),

    transition('void => *', [
        animate(500)
    ]),

    transition('* => void', [
        style({ backgroundColor: 'red' }),
        animate(500)
    ])
])

export let slide = trigger('slide', [

    transition('void => *', [
        style({ transform: 'translateX(-10px)' }),
        animate(700)
    ]),

    transition('* => void', [
        animate('700ms ease-in'),
        style({ transform: 'translateX(-100%)' })
    ])

])

export let bounce = trigger('bounce', [
    transition(':leave', [
        animate('1s ease-out', keyframes([
            style({offset: .2, opacity: 1, transform: 'translateX(20px)'}),
            style({offset: 1, opacity: 0, transform: 'translateX(-100%)'})
        ]))
    ])
])