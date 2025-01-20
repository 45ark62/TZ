/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('TZ.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemClick: function (record) {
        var name=record.get('name')
        console.log(name)
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
        }
    },
    logout: function () {
        
        localStorage.removeItem('TutorialLoggedIn');

       
        this.getView().destroy();

        
        Ext.create({
            xtype: 'login'
        });
    },
    onShowProducts: function() {
        var mainTabPanel = this.getView(); 
        
       
        var existingTab = mainTabPanel.child('tabpanel[xtype=mainlist]');
        
        if (!existingTab) {
           
            mainTabPanel.add({
                xtype: 'mainlist',  
                title: 'Товары',  
                iconCls: 'x-fa fa-shopping-cart',
                closable: true,
            });
        }
    
        
    },
});
