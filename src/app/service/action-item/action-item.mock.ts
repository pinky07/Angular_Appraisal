import { ActionItem } from '../../model/action-item/action-item';

export const ACTION_ITEMS: ActionItem[] = [
    {
        id: 1,
        done: true,
        category: 'Appraisal 2017',
        text: 'Complete Appraisal 2017 form',
        url: [
            '/employeeDashboard'
        ]
    },
    {
        id: 2,
        done: true,
        category: 'Appraisal 2017',
        text: 'Wait for Peers to provide feedback on you',
        url: [
            '/employeeDashboard'
        ]
    },
    {
        id: 3,
        done: false,
        category: 'Appraisal 2017',
        text: 'Wait until mentor aggregates your feedback',
        url: [
            '/employeeDashboard'
        ]
    },
    {
        id: 4,
        done: false,
        category: 'Appraisal 2017',
        text: 'Review your Appraisal 2017 results',
        url: [
            '/employeeDashboard'
        ]
    }
];
