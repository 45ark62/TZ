Ext.define("TZ.view.main.List", {
    extend: "Ext.grid.Panel",
    xtype: "mainlist",

    requires: ["TZ.store.Goods"],

    title: "Список товаров",

    store: {
        type: "goods",
    },

    columns: [
        { text: "ID", dataIndex: "id" },
        { text: "Имя", dataIndex: "name", flex: 1 },
        { text: "Описание", dataIndex: "description", flex: 1 },
        { text: "Цена", dataIndex: "price", flex: 1 },
        { text: "Кол-во", dataIndex: "quantity", flex: 1, renderer: function(value, metaData) {
            if (value === 0) {
                metaData.tdCls = 'price-fall'; 
            }
            return value; 
        
    } }
    ],
    
    

    listeners: {
        select: "onItemClick",
    },


    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'ID товара',
                    itemId: 'filterIdField',
                    listeners: {
                        specialkey: function(field, e) {
                            if (e.getKey() === Ext.EventObject.ENTER) {
                                this.up('grid').applyFilters();  
                            }
                        }
                    }
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Описание товара',
                    itemId: 'filterDescriptionField',
                    listeners: {
                        specialkey: function(field, e) {
                            if (e.getKey() === Ext.EventObject.ENTER) {
                                this.up('grid').applyFilters();  
                            }
                        }
                    }
                }
            ]
        }
    ],

    applyFilters: function() {
        var grid = this,
            store = grid.getStore(),
            idFilter = grid.down('#filterIdField').getValue(),
            descriptionFilter = grid.down('#filterDescriptionField').getValue();

        store.clearFilter();

        if (idFilter) {
            store.filter('id', idFilter);  // Точное совпадение по ID
        }
        if (descriptionFilter) {
            store.filter({
                property: 'description',
                value: descriptionFilter,
                anyMatch: true,  // Вхождение строки в описание
                caseSensitive: false
            });
        }
    }
});