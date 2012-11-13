Ext.define('SenchaCoverFlow.view.Rdv', {
	extend: 'Ext.Container',
	config: {
        fullscreen: true,
        layout:'fit',
        items: [
            {
                xtype: 'agenda'
            }
        ]
    }
});