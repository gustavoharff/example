/**
 * This view is an example list of people.
 */
Ext.define('MyApp.List', {
    extend: 'Ext.grid.Panel',

    xtype: 'mainlist',

    requires: ['MyApp.store.Personnel', 'Ext.window.Toast'],

    title: 'Personnel',

    store: {
        type: 'personnel'
    },

    columns: [{
        locales: {
            'default': 'list.name'
        },
        dataIndex: 'name'
    },
    {
        locales: {
            text: 'list.email.label'
        },
        dataIndex: 'email',
        flex: 1
    },
    {
        locales: {
            'default': 'list.phone'
        },
        dataIndex: 'phone',
        flex: 1
    }
    ]
});
