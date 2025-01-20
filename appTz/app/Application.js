
Ext.define('TZ.Application', {
    extend: 'Ext.app.Application',
    
    name: 'TZ',

    stores: [
        // TODO: add global / shared stores here
    ],
    
    launch: function () {
        var loggedIn;
        loggedIn = localStorage.getItem("TutorialLoggedIn");
        Ext.create({
            xtype: loggedIn ? 'app-main' : 'login'
        });
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Обновить приложение', 'У этого приложения есть изменения, обновить?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
