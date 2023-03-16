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
        console.log(Ext.hi());

        this.callParent(arguments);
    }
});
