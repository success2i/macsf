


//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src',
    'SenchaCoverFlow': 'app'
});
Ext.Loader.setConfig({enabled:true});
Ext.Loader.setPath('Ext.ux', './ux');
/* FOUAD annauire */
//<debug>
Ext.Loader.setPath({
    'Ext.data.proxy.Kiva': 'lib/KivaProxy.js'
});
//</debug>

Ext.ClassManager.setAlias('Ext.data.proxy.Kiva', 'proxy.kiva');
//</debug>

Ext.application({
    
    name: 'SenchaCoverFlow',

    controllers: ["AccueilTrans",'Loans'],
    views: ['Main','slideView', 'MyCover' , 'coverflow2', 'Detail', 'LoanFilter','Annuaire','Faq','Sinistre',
    'Compte','Auth','MyContracts','ListContracts','DetailContract','Rdv'],
    models: ['Loan','Car'],
    stores: ['Loans','Cars'],
    
    requires: [
        'Ext.MessageBox',
        'Ext.ux.Cover',
        'Ext.data.proxy.Kiva'
    ],

    
    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },
launch: function() {
        Ext.fly('appLoadingIndicator').destroy();
        // Initialize the main view
        Ext.Viewport.add(Ext.create('SenchaCoverFlow.view.Main'));


        /* FOUAD AGENDA */
         calendarView = Ext.create('Ext.ux.TouchCalendarView', {
                        //minDate: (new Date()).add(Date.DAY, -40),
                        //maxDate: (new Date()).add(Date.DAY, 55),
                        mode: 'month',
                        weekStart: 0,
                        value: new Date(),
                        eventStore: eventStore,
                        
                        plugins: [Ext.create('Ext.ux.TouchCalendarEvents', {
                            eventBarTpl: '{event}  {location}'
                        })]
                    });
         calendarView.on('eventtap', function(record,event){
                        if(record.get('location')=='')
                            Ext.Msg.alert('','Vous ne pouvez pas prendre un rdv, votre associé est indisponible dans cette date!',Ext.emptyFn);
                        else {
                            if (!this.overlay) {
                            this.overlay = Ext.Viewport.add({
                               
                                xtype: 'formpanel', 
                                modal: true,                                
                                hideOnMaskTap: true,
                                showAnimation: {
                                    type: 'popIn',
                                    duration: 250,
                                    easing: 'ease-out'
                                },
                                hideAnimation: {
                                    type: 'popOut',
                                    duration: 250,
                                    easing: 'ease-out'
                                },
                                centered: true,
                                width: Ext.os.deviceType == 'Phone' ? 290 : 400,
                                height: Ext.os.deviceType == 'Phone' ? 420 : 420,
                                styleHtmlContent: true,
                                items: [
                                    {   
                                        xtype:'fieldset',
                                        title: 'Ajout d\'un RDV avec votre conseiller',
                                        instructions: 'Veuillez bien remplir le formulaire...',
                                        width:Ext.os.deviceType == 'Phone' ? 240 : 360,
                                        items :[
                                         {
                                            xtype: 'datepickerfield',
                                            destroyPickerOnHide: true,
                                            name : 'date',
                                            required:true,
                                            label: 'Date rdv',
                                            value: new Date(),
                                            picker: {
                                                yearFrom: 1990
                                            }
                                        },
                                        {
                                            xtype: 'selectfield',
                                            name : 'rank',
                                            label: 'H. début',
                                            required:true,
                                            value:'10h',
                                            options: [
                                                {
                                                    text : '8h',
                                                    value: 'master'
                                                },
                                                {
                                                    text : '8h30',
                                                    value: 'journeyman'
                                                },
                                                {
                                                    text : '9h',
                                                    value: 'apprentice'
                                                }, {
                                                    text : '9h30',
                                                    value: 'master'
                                                },
                                                {
                                                    text : '10h',
                                                    value: 'journeyman'
                                                },
                                                {
                                                    text : '10h30',
                                                    value: 'apprentice'
                                                },{
                                                    text : '11h',
                                                    value: 'master'
                                                },
                                                {
                                                    text : '11h30',
                                                    value: 'journeyman'
                                                },
                                                {
                                                    text : '12h',
                                                    value: 'apprentice'
                                                }, {
                                                    text : '12h30',
                                                    value: 'master'
                                                },
                                                {
                                                    text : '13h',
                                                    value: 'journeyman'
                                                },
                                                {
                                                    text : '13h30',
                                                    value: 'apprentice'
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'selectfield',
                                            name : 'rank',
                                            label: 'H. fin',
                                            required:true,
                                            value:'12h',
                                            options: [
                                                {
                                                    text : '8h',
                                                    value: 'master'
                                                },
                                                {
                                                    text : '8h30',
                                                    value: 'journeyman'
                                                },
                                                {
                                                    text : '9h',
                                                    value: 'apprentice'
                                                }, {
                                                    text : '9h30',
                                                    value: 'master'
                                                },
                                                {
                                                    text : '10h',
                                                    value: 'journeyman'
                                                },
                                                {
                                                    text : '10h30',
                                                    value: 'apprentice'
                                                },{
                                                    text : '11h',
                                                    value: 'master'
                                                },
                                                {
                                                    text : '11h30',
                                                    value: 'journeyman'
                                                },
                                                {
                                                    text : '12h',
                                                    value: 'apprentice'
                                                }, {
                                                    text : '12h30',
                                                    value: 'master'
                                                },
                                                {
                                                    text : '13h',
                                                    value: 'journeyman'
                                                },
                                                {
                                                    text : '13h30',
                                                    value: 'apprentice'
                                                }
                                            ]
                                        },{
                                            xtype : 'textfield',
                                            name  : 'name',
                                            label : 'Objet',
                                            placeHolder   : 'Objet du rdv...',
                                            autoCapitalize: true,
                                            required      : true,
                                            clearIcon     : true
                                        },{
                                            xtype: 'textareafield',
                                            name : 'bio',
                                            label: 'Description',
                                            placeHolder: 'Description du rdv...',
                                            required:true
                                        }
                                    ]
                                },
                    {
                        xtype: 'panel',
                        defaults: {
                            xtype: 'button',
                            style: 'margin: 0.1em',
                            flex : 1
                        },
                        layout: {
                            type: 'hbox'
                        },
                        items: [
                            {flex : 2,
                                ui:'confirm',
                                text: 'Valider',
                                handler: function(){
                                    calendarView.overlay.hide();
                                    Ext.Msg.alert('','Votre RDV a été ajouté avec success!',Ext.emptyFn);
                                }
                            },
                            {flex : 1,
                                ui:'decline',
                                text: 'Annuler',
                                handler: function(){
                                    calendarView.overlay.hide();
                                }
                            }
                        ]
                    }
                                        ], 
                                scrollable: true
                            });
                            }

                            this.overlay.show();

                        }
                    });
         Ext.define('calendarPanel', {
            extend: 'Ext.Panel',
            xtype:'agenda',
            config: {
                        fullscreen: true,
                        layout: 'fit',
                        items: [calendarView, {
                            xtype: 'toolbar',
                            docked: 'top',
                            items: [{
                                xtype: 'button',
                                text: 'Vue mois',
                                handler: function(){
                                    calendarView.setViewMode('month');
                                }
                            }, {
                                xtype: 'button',
                                text: 'Vue Semaine',
                                handler: function(){
                                    calendarView.setViewMode('week');
                                }
                            }, {
                                xtype: 'button',
                                text: 'Vue jour',
                                handler: function(){
                                    calendarView.setViewMode('day');
                                }
                            }]
                        }]
            }
        });

       
    },
    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
