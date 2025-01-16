/**
 * This view is an example list of people.
 */
Ext.define('TZ.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'TZ.store.Goods'
    ],

    title: 'Список товаров',

    store: {
        type: 'goods'
    },

    columns: [
        { text: 'ID',  dataIndex: 'id' },
        { text: 'Имя', dataIndex: 'name', flex: 1 },
        { text: 'Описание', dataIndex: 'description', flex: 1 },
        { text: 'Цена', dataIndex: 'price', flex: 1 },
        { text: 'Кол-во', dataIndex: 'quantity', flex: 1 },
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
