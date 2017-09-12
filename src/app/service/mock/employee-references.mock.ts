import { Employee } from '../../model/backend/employee';

export const REFERENCES: Employee[] = [
    {
        id: 1,
        email: 'peer.1@gft.com',
        firstName: 'Peer',
        lastName: '1',
        gftIdentifier: 'YYYB',
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
        email: 'peer.2@gft.com',
        firstName: 'Peer',
        lastName: '2',
        gftIdentifier: 'YYYC',
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
        email: 'peer.3@gft.com',
        firstName: 'Peer',
        lastName: '3',
        gftIdentifier: 'YYYD',
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
