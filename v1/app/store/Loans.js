Ext.define('SenchaCoverFlow.store.Loans', {
    extend: 'Ext.data.Store',

    config: {
        model: 'SenchaCoverFlow.model.Loan',
        autoLoad: true,
        remoteFilter: true
    }
});
