Ext.define('TZ.view.product.Card',{
    extends:'Ext.form.Panel',
    xtype:'goodcard',
    title:'Карточка товара',
    bodyPadding:10,
    width:400,
    heigth:400,
    layout:{
        type:'vbox',
        align:'stretch',
    },
    defaults:{
        xtype:'textfield',
        labelAlign:'top',
        margin: '0 0 10 0',
        allwBlank:true
    },
    items: [
        {
            fieldLabel: 'ID товара',
            name: 'id',
            readOnly: true 
        },
        {
            fieldLabel: 'Имя',
            name: 'name'
        },
        {
            xtype: 'textarea',
            fieldLabel: 'Описание',
            name: 'description',
            height: 80
        },
        {
            fieldLabel: 'Цена',
            name: 'price',
            xtype: 'numberfield',
            minValue: 0,
            step: 0.01
        },
        {
            fieldLabel: 'Количество',
            name: 'quantity',
            xtype: 'numberfield',
            minValue: 0
        }
    ],

    bbar: {
        items: [
            '->',
            {
                text: 'Сохранить',
                handler: function(btn) {
                    const form = btn.up('form');
                    if (form.isValid()) {
                        const values = form.getValues();
                        const store = Ext.getStore('goods');
                        const record = store.findRecord('id', values.id);

                        if (record) {
                            // Обновление записи в store
                            record.set(values);
                            Ext.Msg.alert('Успех', 'Товар успешно обновлён.');
                        } else {
                            Ext.Msg.alert('Ошибка', 'Товар с таким ID не найден.');
                        }
                    } else {
                        Ext.Msg.alert('Ошибка', 'Заполните все поля.');
                    }
                }
            },
            {
                text: 'Закрыть',
                handler: function(btn) {
                    btn.up('window').close();
                }
            }
        ]}
}

)