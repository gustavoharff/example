Ext.define('MyApp.util.http.BeforeRequest', {
    singleton: true,

    requires: ['Ext.data.Connection', 'Ext.util.Observable'],

    constructor: function (config) {
        const me = this;

        Ext.util.Observable.observe(Ext.data.Connection, {
            scope: me,
            beforerequest: function (conn, options, eOpts) {
                if (!me.isURL(options.url)) {
                    let url = options.url.split('?')[0];
                    if (url.startsWith('/')) {
                        url = url.substring(1);
                    }
                    options.url = Ext.getResourcePath(url + '.json');
                    options.method = 'GET';
                }
            }
        });

        me.initConfig(config);
    },

    isURL: function (str) {
        var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
        return regexp.test(str);
    }
});
