Ext.define('SenchaCoverFlow.view.coverflow2', {
	extend: 'Ext.Panel',
	
	xtype: 'accueil',

	config: {
		scrollable: true,
		layout: (Ext.os.deviceType === 'Phone')? 'fit': {
                type: 'vbox',
                pack:'center',
                align: 'center'
        },

        iconCls: 'home',
		items:[            
            {
                html: '<div align="center"><br /><img src="resources/images/logo.png" width="55%" height="34%" /><br /></div>'
            },
            {
              	xtype: 'mycover'
            }
        ]

	}
});