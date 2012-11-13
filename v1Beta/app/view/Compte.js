Ext.define("SenchaCoverFlow.view.Compte", {
    extend: 'Ext.tab.Panel',
    requires: [
        'Ext.TitleBar',        
    ],

    config: {
        tabBarPosition: 'bottom',

        //*
        items: [
            {
                xtype:'AuthForm'
            },
            {
                xtype:'MyContForm'
            },
            {
                xtype:'LstContForm'    
            },
            {
                xtype:'DetContForm'
            }
        ]//*/
    }
});
 