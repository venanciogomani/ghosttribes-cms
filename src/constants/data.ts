import { INotification } from "../models/notifications.type";

export const ordersNotifications: INotification[] = [
    {
      author: 'John Doe',
      content: 'Bought 2 copies of Ghost Tribes Volume 1',
      createdAt: new Date('2024-12-12'),
    },
    {
      author: 'Jane Smith',
      content: 'Order cancelled due to low stock',
      createdAt: new Date('2024-12-11'),
    },
    {
      author: 'Emma Watson',
      content: 'Shipped 10 copies of The Catcher in the Rye',
      createdAt: new Date('2024-12-10'),
    },
];

export const invoicesNotifications: INotification[] = [
    {
        author: 'John Doe',
        content: 'Invoice for 2 copies of Ghost Tribes Volume 1 due in 5 days',
        createdAt: new Date('2024-12-15'),
    },
    {
        author: 'Jane Smith',
        content: 'Invoice for 10 copies of The Catcher in the Rye due in 3 days',
        createdAt: new Date('2024-12-14'),
    },
    {
        author: 'Emma Watson',
        content: 'Invoice for 5 copies of To Kill a Mockingbird due in 2 days',
        createdAt: new Date('2024-12-13'),
    },
    {
        author: 'Daniel Brown',
        content: 'Invoice for 3 copies of 1984 due in 1 day',
        createdAt: new Date('2024-12-12'),
    },
    {
        author: 'Michael Johnson',
        content: 'Invoice for 7 copies of Pride and Prejudice due in 7 days',
        createdAt: new Date('2024-12-11'),
    }
];

export const messageNotification: INotification[] = [
    {
        author: 'John Doe',
        content: 'New message from Jane Smith',
        createdAt: new Date('2024-12-16'),
    },
    {
        author: 'Jane Smith',
        content: 'New message from Emma Watson',
        createdAt: new Date('2024-12-15'),
    },
    {
        author: 'Emma Watson',
        content: 'New message from Daniel Brown',
        createdAt: new Date('2024-12-14'),
    },
    {
        author: 'Daniel Brown',
        content: 'New message from Michael Johnson',
        createdAt: new Date('2024-12-13'),
    }
];