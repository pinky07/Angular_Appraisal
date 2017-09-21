import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-collapsable-card',
    templateUrl: './collapsable-card.component.html',
    styleUrls: ['./collapsable-card.component.scss'],
    animations: [
        trigger('collapse', [
            state(
                'show',
                style(
                    {
                        'height': '*'
                    }
                )
            ),
            state(
                'hide',
                style(
                    {
                        'height': '0',
                        'overflow': 'hidden'
                    }
                )
            ),
            transition(
                'hide => show',
                [
                    animate('300ms ease-in')
                ]
            ),
            transition(
                'show => hide',
                [
                    animate('300ms ease-out')
                ]
            )
        ])
    ]
})
export class CollapsableCardComponent implements OnInit {

    @Input()
    public title: string;

    @Input()
    public collapseState: string;

    // Collapse sign current class. Can be either 'fa-plus' or 'fa-minus'
    public collapseSign: string;

    /**
     * Creates an instance of CollapsableCardComponent.
     * @memberof CollapsableCardComponent
     */
    public constructor() {
    }

    /**
     * Initializes the compoenent
     * @memberof CollapsableCardComponent
     */
    public ngOnInit(): void {
        if (this.collapseState === 'show') {
            this.collapseSign = 'fa-minus';
        } else {
            this.collapseSign = 'fa-plus';
        }
    }

    /**
     * Changes the collapse sign from plus to minus and viceversa.
     * Use every time the collapse changes from showing to hiding and viceversa.
     * @memberof CollapsableCard
     */
    public showHideCollapse(): void {
        if (this.collapseState === 'show') {
            this.collapseSign = 'fa-plus';
            this.collapseState = 'hide';
        } else {
            this.collapseSign = 'fa-minus';
            this.collapseState = 'show';
        }
    }
}
