/*
 * This call registers your application to be launched when the browser is ready.
 */
Ext.application({
    extend: 'Ext.app.Application',

    name: 'MyApp',

    requires: [
        'MyApp.*',
    ],

    quickTips: true,

    mainView: 'MyApp.List',

    onBeforeLaunch: function () {
        console.log('now', Ext.moment().format());

        this.callParent(arguments);
    }
});
