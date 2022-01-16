import defaultImageURI from '../assets/images/potato.png';

// Default user 
export const tempUsername = `steve8D`;

// Default items list
export const tempItemsList = [
    {
        id: 0,
        user: 'steve8D',
        name: 'Mattress',
        category: "Furniture",
        itemDescription: 'A very new mattress the university gives me!',
        quantity: 1,
        location: 'UNC',
        time: '9:00pm',
        imgLink: defaultImageURI,
    },
    {
        id: 1,
        user: 'JV',
        name: 'Potato',
        category: "Food",
        itemDescription: 'A very ripe potato!',
        quantity: 2,
        location: 'Bus Loop',
        time: '9:00am',
        imgLink: defaultImageURI,
    },
    {
        id: 2,
        user: 'Jill',
        name: 'Kettle',
        category: "Electronics",
        itemDescription: 'Used kettle (Only 4 months).',
        quantity: 1,
        location: 'Lower Cascade',
        time: '3:00pm',
        imgLink: defaultImageURI,
    },
    {
        id: 3,
        user: 'agentpee',
        name: "Mini-fridge",
        category: "Electronics",
        itemDescription: 'A knee-high fridge that is not too big.',
        quantity: 1,
        location: 'AMS Nest',
        time: '12:00pm',
        imgLink: defaultImageURI,
    }
];


export const tempCategoryList = [
    "All",
    "Clothing",
    "Electronics",
    "Food",
    "Furniture"
];

export const tempTimeList = [
    "All",
    "Morning",
    "Afternoon",
    "Evening",
    "Night"
];