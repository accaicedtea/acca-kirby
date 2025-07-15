// src/data/menuData.js

// Allergen types
export const ALLERGENS = {
    GLUTINE: 'Glutine',
    LATTE: 'Latte',
    UOVA: 'Uova',
    SENAPE: 'Senape',
    PESCE: 'Pesce',
    CROSTACEI: 'Crostacei',
    VEGETARIANO: 'Vegetariano',
    FRUTTA_GUSCIO: 'Frutta a guscio'
};

// Navigation links for menu categories
export const navLinks = [
    { id: 'panini', target: '#panini', icon: 'hamburger', text: 'Panini' },
    { id: 'pizze', target: '#pizze', icon: 'pizza-slice', text: 'Pizze' },
    { id: 'insalate', target: '#insalate', icon: 'leaf', text: 'Insalate' },
    { id: 'piadine', target: '#piadine', icon: 'bread-slice', text: 'Piadine' },
    { id: 'bruschette', target: '#bruschette', icon: 'apple-alt', text: 'Bruschette' },
    { id: 'antipasti', target: '#antipasti', icon: 'utensils', text: 'Antipasti' },
    { id: 'menufissi', target: '#menufissi', icon: 'utensil-spoon', text: 'Menu Fissi' },
    { id: 'birre', target: '#birre', icon: 'beer', text: 'Birre' },
    { id: 'allergeni', target: '#allergeni', icon: 'allergies', text: 'Allergeni' },
];

// Menu categories data
export const menuCategories = [{
        id: 'panini',
        title: 'Panini Rustici',
        icon: 'hamburger',
        items: [{
            name: 'TITTY',
            description: 'Burger di manzo, frittatina, bacon, provola, maionese, ketchup, iceberg',
            price: '€15,00',
            allergens: [ALLERGENS.GLUTINE, ALLERGENS.LATTE, ALLERGENS.UOVA, ALLERGENS.SENAPE]
        }, ],
        note: 'AGGIUNGI SALSE: maionese, ketchup, senape, BBQ, guacamole, salsa yogurt, tabasco, salsa piccante'
    },
    {
        id: 'pizze',
        title: 'Pizze del Forno',
        icon: 'pizza-slice',
        items: []
    },
    {
        id: 'insalate',
        title: 'Insalate Maxi',
        icon: 'leaf',
        items: [{
                name: 'TIPRETENDO',
                description: 'Lattuga iceberg, rughetta, radicchio, tonno, fior di latte, uovo sodo, pomodoro',
                price: '€13,50',
                allergens: [ALLERGENS.PESCE, ALLERGENS.LATTE, ALLERGENS.UOVA]
            },
            {
                name: 'ALBACHIARA',
                description: 'Rughetta, polpa di granchio, gamberetti, arancio',
                price: '€14,00',
                allergens: [ALLERGENS.CROSTACEI, ALLERGENS.PESCE]
            },
            {
                name: 'SOLITUDINE',
                description: 'Lattuga iceberg, rughetta, radicchio, mais, carote, pomodoro',
                price: '€12,00',
                allergens: [ALLERGENS.VEGETARIANO]
            },
            {
                name: 'FARFALLINA',
                description: 'Rughetta, gamberetti, salsa rosa',
                price: '€13,50',
                allergens: [ALLERGENS.CROSTACEI]
            },
            {
                name: 'REWIND',
                description: 'Lattuga iceberg, wurstel, olive nere, uovo sodo, fontina, mais',
                price: '€12,50',
                allergens: [ALLERGENS.LATTE, ALLERGENS.UOVA]
            },
            {
                name: "O'PACHINO 'NNAMURATO'",
                description: 'Lattuga iceberg, rughetta, pomodori ciliegino, bufala, olive nere',
                price: '€13,00',
                allergens: [ALLERGENS.LATTE]
            },
            {
                name: 'BEACH ON THE BEACH',
                description: 'Lattuga iceberg, gamberetti, pomodori ciliegino, mais',
                price: '€13,50',
                allergens: [ALLERGENS.CROSTACEI]
            },
            {
                name: 'VUOTO A PERDERE',
                description: 'Rughetta, bresaola, parmigiano',
                price: '€12,00',
                allergens: [ALLERGENS.LATTE]
            },
            {
                name: 'DICICHE',
                description: 'Lattuga iceberg, tonno, pomodori ciliegino, fior di latte, olive nere',
                price: '€13,50',
                allergens: [ALLERGENS.PESCE, ALLERGENS.LATTE]
            },
            {
                name: 'TRAP',
                description: 'Lattuga iceberg, pomodori ciliegino, mais, tonno, noci',
                price: '€14,00',
                allergens: [ALLERGENS.PESCE, ALLERGENS.FRUTTA_GUSCIO]
            }
        ]
    },
    {
        id: 'piadine',
        title: 'Piadine Artigianali',
        icon: 'bread-slice',
        items: [{
                name: 'MOZZARELLA FIOR DI LATTE, CRUDO E RUGHETTA',
                price: '€8,50',
                allergens: [ALLERGENS.GLUTINE, ALLERGENS.LATTE]
            },
            {
                name: 'POMODORO E MOZZARELLA FIOR DI LATTE',
                price: '€8,00',
                allergens: [ALLERGENS.GLUTINE, ALLERGENS.LATTE]
            },
            {
                name: 'BRESAOLA, RUGHETTA E PARMIGIANO',
                price: '€9,00',
                allergens: [ALLERGENS.GLUTINE, ALLERGENS.LATTE]
            },
            {
                name: 'STRACCHINO E CRUDO',
                price: '€8,50',
                allergens: [ALLERGENS.GLUTINE, ALLERGENS.LATTE]
            },
            {
                name: 'STRACCHINO COTTO E RUGHETTA',
                price: '€8,50',
                allergens: [ALLERGENS.GLUTINE, ALLERGENS.LATTE]
            },
            {
                name: 'STRACCHINO CRUDO E RUGHETTA',
                price: '€8,50',
                allergens: [ALLERGENS.GLUTINE, ALLERGENS.LATTE]
            },
            {
                name: 'MOZZARELLA FIOR DI LATTE E CRUDO',
                price: '€8,50',
                allergens: [ALLERGENS.GLUTINE, ALLERGENS.LATTE]
            },
            {
                name: 'MOZZARELLA FIOR DI LATTE E COTTO',
                price: '€8,50',
                allergens: [ALLERGENS.GLUTINE, ALLERGENS.LATTE]
            }
        ]
    },
    {
        id: 'bruschette',
        title: 'Bruschette & Bruschettoni',
        icon: 'apple-alt',
        items: []
    },
    {
        id: 'antipasti',
        title: 'Antipasti della Casa',
        icon: 'utensils',
        items: []
    },
    {
        id: 'menufissi',
        title: 'Menu Fissi',
        icon: 'utensil-spoon',
        isSpecial: true,
        items: [{
                name: 'MENU PIZZA',
                description: '<p>FRITTO MISTO - supplì, oliva ascolana, mozzarellina</p><p>1 BRUSCHETTA AL POMODORO</p><p>1 PIZZA A SCELTA dal menu</p><p>1 BEVANDA MEDIA 50 cl (bibita alla spina, calice di vino o birra alla spina)</p>',
                note: 'Ogni variazione sulla pizza + € 2,00',
                price: '€24,90'
            },
            {
                name: 'MENU KIDS',
                note: 'Valido per bambini fino a 10 anni - ogni piatto include bevanda',
                subItems: [
                    { name: '140$ WURSTEL E PATATINE', price: '€8,50' },
                    { name: '1407 HAMBURGER AL PIATTO E PATATINE', price: '€9,00' },
                    { name: '1408 PANINO CON HAMBURGER, FORMAGGIO E PATATINE', price: '€9,50' },
                ]
            }
        ]
    }
];


export const allergens = [
    { name: 'Glutine', icon: 'wheat-awn' },
    { name: 'Crostacei', icon: 'shrimp' },
    { name: 'Uova', icon: 'egg' },
    { name: 'Pesce', icon: 'fish' },
    { name: 'Arachidi', icon: 'seedling' },
    { name: 'Soia', icon: 'leaf' },
    { name: 'Latte', icon: 'cheese' },
    { name: 'Frutta a guscio', icon: 'tree' },
    { name: 'Sedano', icon: 'carrot' },
    { name: 'Senape', icon: 'seedling' },
    { name: 'Sesamo', icon: 'circle-dot' },
    { name: 'Anidride solforosa', icon: 'wine-bottle' }
];