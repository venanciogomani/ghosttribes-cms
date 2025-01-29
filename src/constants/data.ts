import { INotification } from "../models/notifications.type";
import { ICategory, IProduct, ITag } from "../models/products.type";

export const products: IProduct[] = [
    {
        id: 1,
        sku: "0012987",
        name: 'The Ghost of Africa',
        price: 9.99,
        salePrice: 7.99,
        category: 'Book',
        tags: ['eBook', 'novel'],
        description: 'A thrilling tale of survival and friendship.',
        rating: 4.5
    },
    {
        id: 2,
        sku: "0012988",
        name: 'A Tale of Three Kings',
        price: 12.99,
        salePrice: 9.99,
        category: 'Book',
        tags: ['eBook', 'comic'],
        description: 'A timeless classic that explores the theme of love.',
        rating: 4.8
    },
    {
        id: 3,
        sku: "0012989",
        name: 'The Council of Paramounts',
        price: 10.99,
        salePrice: 8.99,
        category: 'Book',
        tags: ['eBook', 'novel'],
        description: 'A powerful story about racial injustice and the importance of justice.',
        rating: 4.7
    }
];

export const categories: ICategory[] = [
    {
        id: 1,
        name: 'Book',
        parentId: null
    },
    {
        id: 2,
        name: 'Novel',
        parentId: 1
    },
    {
        id: 3,
        name: 'Education',
        parentId: 1
    },
    {
        id: 4,
        name: 'Clothing',
        parentId: null
    },
    {
        id: 5,
        name: 'Shirts',
        parentId: 4
    }
];

export const tags: ITag[] = [
    {
        id: 1,
        name: 'eBook'
    },
    {
        id: 2,
        name: 'comic'
    },
    {
        id: 3,
        name: 'novel'
    },
    {
        id: 4,
        name: 'clothing'
    },
    {
        id: 5,
        name:'shirts'
    }
];

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