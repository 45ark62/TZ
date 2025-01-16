Ext.define('TZ.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onLoginClick: function () {
        
        var form = this.lookupReference('form');
        var values = form.getValues();  

        var login = values.username;
        var password = values.password;

       
        if (login === 'admin' && password === 'padmin') {
            localStorage.setItem("TutorialLoggedIn", true);

           
            this.getView().destroy();

           
            Ext.create({
                xtype: 'app-main'
            });
        } else {
            Ext.Msg.alert('Ошибка', 'Неверный логин или пароль');
        }
    }
});