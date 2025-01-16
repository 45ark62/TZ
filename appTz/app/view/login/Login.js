Ext.define('TZ.view.login.Login', {
    extend: 'Ext.window.Window',
    xtype: 'login',

    requires: [
        'TZ.view.login.LoginController',
        'Ext.form.Panel'
    ],

    controller: 'login',
    bodyPadding: 10,
    title: 'Окно авторизации',
    closable: false,
    autoShow: true,
    modal: true,  

    
   


    centered: true,

    items: {
        xtype: 'form',
        reference: 'form',
        items: [{
            xtype: 'textfield',
            name: 'username',
            fieldLabel: 'Логин',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            fieldLabel: 'Пароль',
            allowBlank: false
        },],
        buttons: [{
            text: 'Login',
            formBind: true,
            listeners: {
                click: 'onLoginClick'
            },
            style:{

            }
        }]
    }
});