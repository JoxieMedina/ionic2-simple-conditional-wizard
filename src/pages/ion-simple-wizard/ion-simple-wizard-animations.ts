import { trigger, state, animate, style, transition, keyframes } from '@angular/core';

export class WizardAnimations {

    //Buttons Animations
    static btnZoom = [
        trigger('btnState', [
            transition(':enter', [
                style({ opacity: 0, transform: 'scale(0)' }),
                animate('400ms ease-in', style({ opacity: 1, transform: 'scale(1)' }))
            ]),
            transition(':leave', [
                animate('400ms ease-out', style({ opacity: 0, transform: 'scale(0)' }))
            ])
        ])
    ];
    static btnflipY = [
        trigger('btnState', [
            transition(':enter', [
                animate('400ms 200ms ease-in',
                    keyframes([
                        style({ transform: 'perspective(100px) rotate3d(0, 1, 0, 90deg)', opacity: '0', offset: 0 }),
                        style({ transform: 'perspective(100px) rotate3d(0, 1, 0, -20deg)', offset: 0.4 }),
                        style({ transform: 'perspective(100px) rotate3d(0, 1, 0, 10deg)', opacity: '1', offset: 0.6 }),
                        style({ transform: 'perspective(100px) rotate3d(0, 1, 0, -5deg)', opacity: '1', offset: 0.8 }),
                        style({ transform: 'perspective(100px)', opacity: '1', offset: 1 })
                    ]))
            ]), transition(':leave', [
                animate('100ms 400ms ease-in',
                    keyframes([
                        style({ transform: 'perspective(100px)', opacity: '1', offset: 0 }),
                        style({ transform: 'perspective(100px) rotate3d(0, 1, 0, -20deg)', opacity: '1', offset: 0.3 }),
                        style({ transform: 'perspective(100px) rotate3d(0, 1, 0, 90deg)', opacity: '0', offset: 1 })
                    ]))
            ])
        ])
    ];

    static btnRotate = [
        trigger('btnState', [
            transition(':enter', [
                animate('400ms 200ms ease-in',
                    keyframes([
                        style({ transform: 'rotate3d(0, 0, 1, -200deg)', opacity: '0', transformOrigin: 'center', offset: 0 }),
                        style({ transform: 'none', opacity: '1', transformOrigin: 'center', offset: 1 })
                    ]))
            ]), transition(':leave', [
                animate(400,
                    keyframes([
                        style({ transform: 'none', opacity: '1', transformOrigin: 'center', offset: 0 }),
                        style({ transform: 'rotate3d(0, 0, 1, 200deg)', opacity: '0', transformOrigin: 'center', offset: 1 })
                    ]))
            ])
        ])
    ];


    //Steps Animations
    static carruselRight = [
        trigger('WizardAnimations', [
            state('enter', style({ position: 'absolute', top: 0 })),
            state('leave', style({ visibility: 'hidden', position: 'absolute', top: 0 })),
            transition('*=>enter', [
                style({ visibility: 'visible', opacity: 0, transform: 'translateX(-100%)' }),
                animate('500ms ease-in-out', style({ opacity: 1, transform: 'translateX(0%)' }))
            ]),
            transition('*=>leave', [
                style({ transform: 'translateX(0%)' }),
                animate('500ms ease-in-out', style({ opacity: 0, transform: 'translateX(100%)' }))
            ])
        ])
    ];
    static zoom = [
        trigger('WizardAnimations', [
            state('enter', style({ position: 'absolute', top: 0 })),
            state('leave', style({ visibility: 'hidden', position: 'absolute', top: 0 })),
            transition('*=>enter', [
                style({ visibility: 'visible', opacity: 0, transform: 'scale(0)' }),
                animate('300ms ease-in', style({ opacity: 1, transform: 'scale(1)' }))
            ]),
            transition('*=>leave', [
                animate('300ms ease-out', style({ opacity: 0, transform: 'scale(0)' }))
            ])
        ])
    ];
    static carruselLeft = [
        trigger('WizardAnimations', [
            state('enter', style({ position: 'absolute', top: 0 })),
            state('leave', style({ visibility: 'hidden', position: 'absolute', top: 0 })),
            transition('*=>enter', [
                style({ visibility: 'visible', opacity: 0, transform: 'translateX(100%)' }),
                animate('500ms ease-in-out', style({ opacity: 1, transform: 'translateX(0%)' }))
            ]),
            transition('*=>leave', [
                style({ transform: 'translateX(0%)' }),
                animate('500ms ease-in-out', style({ opacity: 0, transform: 'translateX(-100%)' }))
            ])
        ])
    ];
    static carruselBottom = [
        trigger('WizardAnimations', [
            state('enter', style({ position: 'absolute', top: 0 })),
            state('leave', style({ visibility: 'hidden', position: 'absolute', top: 0 })),
            transition('*=>enter', [
                style({ visibility: 'visible', opacity: 0, transform: 'translateY(-100%)' }),
                animate('500ms ease-in-out', style({ opacity: 1, transform: 'translateY(0%)' }))
            ]),
            transition('*=>leave', [
                style({ transform: 'translateY(0%)' }),
                animate('500ms ease-in-out', style({ opacity: 0, transform: 'translateY(100%)' }))
            ])
        ])
    ];
    static carruselTop = [
        trigger('WizardAnimations', [
            state('enter', style({ position: 'absolute', top: 0 })),
            state('leave', style({ visibility: 'hidden', position: 'absolute', top: 0 })),
            transition('*=>enter', [
                style({ visibility: 'visible', opacity: 0, transform: 'translateY(100%)' }),
                animate('500ms ease-in-out', style({ opacity: 1, transform: 'translateY(0%)' }))
            ]),
            transition('*=>leave', [
                style({ transform: 'translateY(0%)' }),
                animate('500ms ease-in-out', style({ opacity: 0, transform: 'translateY(-100%)' }))
            ])
        ])
    ];
    static flipY = [
        trigger('WizardAnimations', [
            state('enter', style({ position: 'absolute', top: 0 })),
            state('leave', style({ visibility: 'hidden', position: 'absolute', top: 0 })),
            transition('*=>enter', [
                style({ visibility: 'visible' }),
                animate('400ms ease-in',
                    keyframes([
                        style({ transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)', opacity: '0', offset: 0 }),
                        style({ transform: 'perspective(400px) rotate3d(0, 1, 0, -20deg)', offset: 0.4 }),
                        style({ transform: 'perspective(400px) rotate3d(0, 1, 0, 10deg)', opacity: '0.5', offset: 0.6 }),
                        style({ transform: 'perspective(400px) rotate3d(0, 1, 0, -5deg)', opacity: '1', offset: 0.8 }),
                        style({ transform: 'perspective(400px)', opacity: '1', offset: 1 })
                    ]))
            ]), transition('*=>leave', [
                style({ visibility: 'visible' }),
                animate('400ms ease-in-out',
                    keyframes([
                        style({ transform: 'perspective(400px)', opacity: '1', offset: 0 }),
                        style({ transform: 'perspective(400px) rotate3d(0, 1, 0, -20deg)', opacity: '0.5', offset: 0.3 }),
                        style({ transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)', opacity: '0', offset: 1 })
                    ]))
            ])
        ])
    ];
    static flipX = [
        trigger('WizardAnimations', [
            state('enter', style({ position: 'absolute', top: 0 })),
            state('leave', style({ visibility: 'hidden', position: 'absolute', top: 0 })),
            transition('*=>enter', [
                style({ visibility: 'visible' }),
                animate('400ms 200ms ease-in',
                    keyframes([
                        style({ transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)', opacity: '0', offset: 0 }),
                        style({ transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)', offset: 0.4 }),
                        style({ transform: 'perspective(400px) rotate3d(1, 0, 0, 10deg)', opacity: '0.5', offset: 0.6 }),
                        style({ transform: 'perspective(400px) rotate3d(1, 0, 0, -5deg)', opacity: '1', offset: 0.8 }),
                        style({ transform: 'perspective(400px)', opacity: '1', offset: 1 })
                    ]))
            ]),
            transition('*=>leave', [
                style({ visibility: 'visible' }),
                animate('400ms 200ms ease-in',
                    keyframes([
                        style({ transform: 'perspective(400px)', opacity: '1', offset: 0 }),
                        style({ transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)', opacity: '0.5', offset: 0.3 }),
                        style({ transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)', opacity: '0', offset: 1 })
                    ]))
            ])
        ])
    ];
   
}










