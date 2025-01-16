const mockData = [
    {
      "id": 1,
      "name": "Смартфон Samsung Galaxy S23",
      "description": "Современный смартфон с 6,1-дюймовым дисплеем, процессором Exynos 2200, камерой 50 МП.",
      "price": 74999,
      "quantity": 120
    },
    {
      "id": 2,
      "name": "Ноутбук Apple MacBook Air M2",
      "description": "Легкий и мощный ноутбук с процессором Apple M2, экраном 13,6 дюйма и 8 ГБ ОЗУ.",
      "price": 109999,
      "quantity": 45
    },
    {
      "id": 3,
      "name": "Наушники Sony WH-1000XM5",
      "description": "Беспроводные наушники с активным шумоподавлением и до 30 часов работы на одном заряде.",
      "price": 29999,
      "quantity": 65
    },
    {
      "id": 4,
      "name": "Телевизор LG OLED55CX",
      "description": "55-дюймовый OLED телевизор с разрешением 4K и поддержкой Dolby Vision.",
      "price": 129999,
      "quantity": 20
    },
    {
      "id": 5,
      "name": "Планшет Samsung Galaxy Tab S8",
      "description": "Планшет с экраном 11 дюймов, процессором Snapdragon 8 Gen 1 и 8 ГБ ОЗУ.",
      "price": 49999,
      "quantity": 80
    },
    {
      "id": 6,
      "name": "Умные часы Apple Watch Series 8",
      "description": "Умные часы с мониторингом здоровья, экраном 1,9 дюйма и до 18 часов автономности.",
      "price": 45999,
      "quantity": 150
    },
    {
      "id": 7,
      "name": "Робот-пылесос iRobot Roomba 981",
      "description": "Робот-пылесос с системой навигации iAdapt 2.0 и возможностью управления через мобильное приложение.",
      "price": 34999,
      "quantity": 0
    },
    {
      "id": 8,
      "name": "Смартфон Xiaomi 13 Pro",
      "description": "Флагманский смартфон с процессором Snapdragon 8 Gen 2, камерой 50 МП и AMOLED экраном.",
      "price": 64999,
      "quantity": 95
    },
    {
      "id": 9,
      "name": "Ноутбук Dell XPS 13",
      "description": "Компактный ноутбук с процессором Intel i7, 16 ГБ ОЗУ и 512 ГБ SSD.",
      "price": 119999,
      "quantity": 30
    },
    {
      "id": 10,
      "name": "Проектор Epson EH-TW7100",
      "description": "4K проектор с поддержкой HDR и возможностью создания экрана до 300 дюймов.",
      "price": 79999,
      "quantity": 0
    },
    {
      "id": 11,
      "name": "Электрическая зубная щетка Philips Sonicare 9900 Prestige",
      "description": "Зубная щетка с технологией Smart Sensor и 3 уровнями интенсивности для идеальной чистки.",
      "price": 21999,
      "quantity": 200
    },
    {
      "id": 12,
      "name": "Кофемашина De'Longhi Dinamica Plus",
      "description": "Автоматическая кофемашина с возможностью приготовления эспрессо, капучино и латте.",
      "price": 69999,
      "quantity": 40
    },
    {
      "id": 13,
      "name": "Камера GoPro Hero 11 Black",
      "description": "Экшн-камера с возможностью записи в 5.3K, стабилизацией HyperSmooth и водонепроницаемостью.",
      "price": 44999,
      "quantity": 60
    },
    {
      "id": 14,
      "name": "Смарт-колонка Amazon Echo Dot 5th Gen",
      "description": "Компактная смарт-колонка с поддержкой голосового помощника Alexa и улучшенным звуком.",
      "price": 4999,
      "quantity": 300
    },
    {
      "id": 15,
      "name": "Портативная зарядка Anker PowerCore 20000",
      "description": "Портативная зарядка с емкостью 20000 мАч и двумя портами USB для зарядки нескольких устройств.",
      "price": 2999,
      "quantity": 0
    }
  ];
Ext.define('TZ.store.Goods', {
    extend: 'Ext.data.Store',

    alias: 'store.goods',

    
    fields: [
            { name: 'id', type: 'int' },
            { name: 'name', type: 'string' },
            { name: 'description', type: 'string' },
            { name: 'price', type: 'float' },
            { name: 'quantity', type: 'int' }
        ]
    ,

    data: mockData,

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
