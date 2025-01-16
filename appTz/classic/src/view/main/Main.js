Ext.define('TZ.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

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
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: 'var1'
            },
            flex: 0
        },
        iconCls: 'fa-spinner',
        style:{
            backgroundColor: '#333',
        },
        
    },

    tabBar: {
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        },
       
        
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
        bodyPadding: 60,
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

    items: [{
        title: 'Товары',
        iconCls: 'x-fa fa-shopping-cart', 
        style:{
            color: 'white', 
            padding: '10px 20px'
        },
       
        
        items: [{
            xtype: 'mainlist'
        }]
    },
    ],buttons:[{
        title:'Выход',
    }]
});
