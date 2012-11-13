Ext.define('SenchaCoverFlow.view.Annuaire', {
    extend: 'Ext.Container',
    xtype: 'annuaire',
    requires: [
        'SenchaCoverFlow.view.LoansList',
        'SenchaCoverFlow.view.LoanFilter'
    ],

    config: {
        fullscreen: true,
        layout: 'fit',
        items: [
            {
                xtype : 'loanfilter',
                docked: 'top'
            },
            {
                xtype: 'loanslist'
            }
        ]
    }
});
