Ext.define('TZ.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',
    plugins: 'viewport',
    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'TZ.view.main.MainController',
        'TZ.view.main.MainModel',
        'TZ.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,
    header: {
        layout: {
            
            type: 'hbox', 
            align: 'stretch',  
            pack: 'start',
        },
        items: [
            {
                xtype: 'button',
                text: 'Товары',
                iconCls: 'x-fa fa-shopping-cart',
                handler: 'onShowProducts',
         
            },
            {
                xtype: 'button',
                text: 'Выход',
                iconCls: 'x-fa fa-sign-out',
                handler: 'logout'
            }
        ]
        
        
    },

    tabBar: {
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        },
        style: {
        'padding-right': '20px'
    }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'top'
        }
    },

    defaults: {
        bodyPadding: 100,
      
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 100
                }
            }
        }
    },

    
});
