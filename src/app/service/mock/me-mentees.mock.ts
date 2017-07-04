import { ActionItem } from '../../model/action-item/action-item';
import { Employee } from '../../model/employee/employee';

export const MENTEES: Employee[] = [
    {
        id: 1,
        email: 'mentee.1@gft.com',
        firstName: 'Mentee',
        lastName: '1',
        gftIdentifier: 'ZZZB',
        isAdmin: false,
        isMentor: false,
        isPeer: false,
        applicationRole: {
            id: 2,
            name: 'User',
            description: 'System user'
        },
        jobLevel: {
            id: 1,
            jobFamily: {
                id: 1,
                name: 'Application Management Services',
                description: 'Application Management Services Description'
            },
            name: 'L1',
            description: 'L1 description',
            expertise: 'Entry'
        }
    },
    {
        id: 2,
        email: 'mentee.2@gft.com',
        firstName: 'Mentee',
        lastName: '2',
        gftIdentifier: 'ZZZC',
        isAdmin: false,
        isMentor: false,
        isPeer: false,
        applicationRole: {
            id: 2,
            name: 'User',
            description: 'System user'
        },
        jobLevel: {
            id: 1,
            jobFamily: {
                id: 1,
                name: 'Application Management Services',
                description: 'Application Management Services Description'
            },
            name: 'L1',
            description: 'L1 description',
            expertise: 'Entry'
        }
    },
    {
        id: 3,
        email: 'mentee.3@gft.com',
        firstName: 'Mentee',
        lastName: '3',
        gftIdentifier: 'ZZZD',
        isAdmin: false,
        isMentor: false,
        isPeer: false,
        applicationRole: {
            id: 2,
            name: 'User',
            description: 'System user'
        },
        jobLevel: {
            id: 1,
            jobFamily: {
                id: 1,
                name: 'Application Management Services',
                description: 'Application Management Services Description'
            },
            name: 'L1',
            description: 'L1 description',
            expertise: 'Entry'
        }
    },
    {
        id: 4,
        email: 'mentee.4@gft.com',
        firstName: 'Mentee',
        lastName: '4',
        gftIdentifier: 'ZZZE',
        isAdmin: false,
        isMentor: false,
        isPeer: false,
        applicationRole: {
            id: 2,
            name: 'User',
            description: 'System user'
        },
        jobLevel: {
            id: 1,
            jobFamily: {
                id: 1,
                name: 'Application Management Services',
                description: 'Application Management Services Description'
            },
            name: 'L1',
            description: 'L1 description',
            expertise: 'Entry'
        }
    },
    {
        id: 5,
        email: 'mentee.5@gft.com',
        firstName: 'Mentee',
        lastName: '5',
        gftIdentifier: 'ZZZF',
        isAdmin: false,
        isMentor: false,
        isPeer: false,
        applicationRole: {
            id: 2,
            name: 'User',
            description: 'System user'
        },
        jobLevel: {
            id: 1,
            jobFamily: {
                id: 1,
                name: 'Application Management Services',
                description: 'Application Management Services Description'
            },
            name: 'L1',
            description: 'L1 description',
            expertise: 'Entry'
        }
    }
];
