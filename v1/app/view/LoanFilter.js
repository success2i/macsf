/**
 * @class kiva.views.LoanFilter
 * @extends Ext.form.Panel
 *
 * This form enables the user to filter the types of Loans visible to those that they are interested in.
 *
 * We add a custom event called 'filter' to this class, and fire it whenever the user changes any of the
 * fields. The loans controller listens for this event and filters the Ext.data.Store that contains the
 * Loans based on the values selected (see the onFilter method in app/controllers/loans.js).
 *
 */
Ext.define('SenchaCoverFlow.view.LoanFilter', {
    extend: 'Ext.Container',
    xtype: 'loanfilter',
    requires: [
        'Ext.field.Select',
        'Ext.field.Search',
        'Ext.Toolbar'
    ],

    config: {
        items: [
            {
                xtype: 'toolbar',
                ui   : 'light',
                docked: 'top',
                items: [
                    { xtype: 'spacer', width: 50 },
                    { xtype: 'spacer' },
                    {
                        xtype: 'title',
                        title: 'Annuaire des professionnels'
                    },
                    { xtype: 'spacer' },
                    {
                        xtype: 'button',
                        iconMask: true,
                        iconCls: 'refresh'
                    }
                ]
            },
            {
                xtype: 'toolbar',
                docked: 'top',
                ui: 'light',
                items: (Ext.os.deviceType === 'Phone') ? [
                    { xtype: 'searchfield', flex: 1 }
                ] : [
                    {
                        xtype: 'selectfield',
                        name: 'gender',
                        options: [
                            {text: 'Les deux sexe', value: 'both'},
                            {text: 'Homme', value: 'male'},
                            {text: 'Femme', value: 'female'}
                        ]
                    },
                    {
                        xtype: 'selectfield',
                        width: 300,
                        name: 'sector',
                        prependText: 'Sector:',
                        options: [
                            {text: 'Toutes les professions',            value: ''},
                            {text: 'Aides-soignants',    value: 'agriculture'},
                            {text: 'Anesthésistes', value: 'transportation'},
                            {text: 'Cardiologues',       value: 'services'},
                            {text: 'Chirurgiens',       value: 'clothing'},
                            {text: 'Chirurgiens-anesthésistes',         value: 'health'},
                            {text: 'Dentistes',         value: 'retail'},
                            {text: 'Étudiants en santé',  value: 'manufacturing'},
                            {text: 'Gynécologues-obstétriciens',           value: 'arts'},
                            {text: 'Infirmiers, infirmières',        value: 'housing'},
                            {text: 'Internes',           value: 'food'},
                            {text: 'Kinésithérapeutes',      value: 'wholesale'},
                            {text: 'Manipulateurs radio - radiologie',   value: 'construction'},
                            {text: 'Médecin expert',      value: 'education'},
                            {text: 'Médecin',   value: 'personal'},
                            {text: 'Médecins d\'urgence et de garde',  value: 'entertainment'},
                            {text: 'Médecins du sport',          value: 'green'}
                        ]
                    },
                    // { xtype: 'spacer' },
                    {
                        xtype: 'selectfield',
                        name: 'sort_by',
                        prependText: 'Sort by:',
                        options: [
                            {text: 'Qui cherchent',           value: 'newest'},
                            {text: 'Qui cherchent à recruter',           value: 'oldest'},
                            {text: 'Qui cherchent à etre recruté',         value: 'expiration'}
                        ]
                    },

                    {xtype: 'spacer'},

                    { xtype: 'searchfield' }
                ]
            }
        ],

        layout: {
            type: 'vbox',
            align: 'stretch'
        }
    },

    /**
     * This is called whenever any of the fields in the form are changed. It simply collects all of the
     * values of the fields and fires the custom 'filter' event.
     */
    onFieldChange : function(comp, value) {
        this.fireAction('filter', this.getValues(), this);
    }
});
