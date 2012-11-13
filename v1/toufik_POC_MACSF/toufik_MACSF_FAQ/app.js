Ext.application({
    name: 'MACSF',

    requires: [
        'Ext.MessageBox'
    ],

    views: ['Main'],

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
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        var data = {
         text: 'Questions juridiques',
         items: [{
             text: 'Auto',
             
             items: [{
                     text: 'Que fait la MACSF pour récompenser les bons conducteurs ? ',
                     imgURL:'doc1.png',
                     items: [{
                            text: 'La MACSF a mis en place depuis plus de 20 ans dans ses contrats AUTO des dispositifs tarifaires qui permettent de récompenser les meilleurs conducteurs.', 
                            leaf: true
                            }, {
                             text: 'Pour les contrats 010 (Bonus 10%), l\'avantage Bon Conducteur mais aussi le Bonus Plus.  Les réductions de tarif ne s’arrêtent pas une fois atteint le meilleur et le maximum de l’Avantage Bon Conducteur.',
                             leaf: true
                            },{
                             text: 'Une fois acquises, les réductions Bonus Plus ne sont pas remises en cause même en cas de déclaration de sinistres responsables. Elles sont acquises à vie et sont même transférables sur un nouveau  contrat à 050 (sans conducteur novice déclaré) souscrit à la MACSF !',
                             leaf: true
                            }, {
                             text: '',
                             leaf: true
                            },{
                             text: '',
                             leaf: true
                            }]
                    }, {
                     text: 'Question auto1',
                     imgURL:'doc2.png',
                     items: [
                            {
                                text:'réponse auto1',
                                leaf:true      
                            },
                            {
                                text:'réponse auto1',
                                leaf:true
                            },
                            {
                                text:'réponse auto1',
                                leaf:true    
                            },
                            {
                                text:'réponse auto1',
                                leaf:true
                            }
                            ]
                    },  {
                     text: 'Question auto2',
                     imgURL:'doc3.png',
                     items: [
                            {
                                text:'réponse auto2',
                                leaf:true      
                            },
                            {
                                text:'réponse auto2',
                                leaf:true
                            },
                            {
                                text:'réponse auto2',
                                leaf:true    
                            },
                            {
                                text:'réponse auto2',
                                leaf:true
                            }
                            ]
                        },
                        {
                     text: 'Question auto3',
                     imgURL:'doc4.png',
                     items: [
                            {
                                text:'réponse auto3',
                                leaf:true      
                            },
                            {
                                text:'réponse auto3',
                                leaf:true
                            },
                            {
                                text:'réponse auto3',
                                leaf:true    
                            },
                            {
                                text:'réponse auto3',
                                leaf:true
                            }                            ]
                        },{
                     text: 'Question auto4',
                     items: [
                            {
                                text:'réponse auto4',
                                leaf:true      
                            },
                            {
                                text:'réponse auto4',
                                leaf:true
                            },
                            {
                                text:'réponse auto4',
                                leaf:true    
                            },
                            {
                                text:'réponse auto4',
                                leaf:true
                            }                            ]
                        },
                    ]
         }, {
             text: 'Questions des Infermiers',
             items: [{
                 text: 'Q infermier 1',
                    items:[
                    {
                        text:'réponse infermier1',
                        leaf:true
                    },
                    {
                        text:'réponse infermier1',
                        leaf:true
                    },
                    {
                        text:'réponse infermier1',
                        leaf:true
                    }
                    ]
             }, {
                 text: 'Question infermier 2',
                 items:[
                    {
                        text:'réponse infermier2',
                        leaf:true
                    },
                    {
                        text:'réponse infermier2',
                        leaf:true
                    },
                    {
                        text:'réponse infermier2',
                        leaf:true
                    }
                    ]
             }]
         }, {
             text: 'Questions des Ophtalmologistes',
             items: [{
                 text: 'Question Ophtalmologiste1',
                    items:[
                    {
                        text:'réponse Ophtalmologiste1',
                        leaf:true
                    },
                    {
                        text:'réponse Ophtalmologiste1',
                        leaf:true
                    },
                    {
                        text:'réponse Ophtalmologiste1',
                        leaf:true
                    }
                    ]
             }, {
                 text: 'Question Ophtalmologiste2',
                    items:[
                    {
                        text:'réponse Ophtalmologiste2',
                        leaf:true
                    },
                    {
                        text:'réponse Ophtalmologiste2',
                        leaf:true
                    },
                    {
                        text:'réponse Ophtalmologiste2',
                        leaf:true
                    }
                    ]
             }]
         }, {
             text: 'Questions des médecins du travail',
             items: [{
                 text: 'Questions médec du travail 1',
                    items:[
                    {
                        text:'réponse médecin du travail 1',
                        leaf:true
                    },
                    {
                        text:'réponse médecin du travail 1',
                        leaf:true
                    },
                    {
                        text:'réponse médecin du travail 1',
                        leaf:true
                    }
                    ]
             }, {
                 text: 'Questions médec du travail 2',
                    items:[
                    {
                        text:'réponse médecin du travail 2',
                        leaf:true
                    },
                    {
                        text:'réponse médecin du travail 2',
                        leaf:true
                    },
                    {
                        text:'réponse médecin du travail 2',
                        leaf:true
                    }
                    ]
             }]
         }, {
             text: 'Questions des généralistes/Radiologues',
             items: [{
                 text: 'Questions généralistes 1',
                    items:[
                    {
                        text:'réponse généralistes 1',
                        leaf:true
                    },
                    {
                        text:'réponse généralistes 1',
                        leaf:true
                    },
                    {
                        text:'réponse généralistes 1',
                        leaf:true
                    }
                    ]
             }, {
                 text: 'Questions généralistes 2',
                    items:[
                    {
                        text:'réponse généralistes 2',
                        leaf:true
                    },
                    {
                        text:'réponse généralistes 2',
                        leaf:true
                    },
                    {
                        text:'réponse généralistes 2',
                        leaf:true
                    }
                    ]
             }]
         }, {
             text: 'Crédit, épargne et prévoyance',
             items: [{
                 text: 'Crédit',
                 leaf: true
             }, {
                 text: 'épargne',
                 leaf: true
             }, {
                 text: 'prévoyance',
                 leaf: true
             }]
         }]
     };

         Ext.define('ListItem', {
             extend: 'Ext.data.Model',
             itemTpl : '<img src="http://localhost/MACSF/resources/images/" width="20" heigh="20"></img><span>{firstName} {lastName}</span>',
             config: {
                 fields: [{
                     name: 'text',
                     type: 'string',
                     
                 }]
             }
         });

         var store = Ext.create('Ext.data.TreeStore', {
             model: 'ListItem',
             defaultRootProperty: 'items',
             root: data
         });

         var nestedList = Ext.create('Ext.NestedList', {
             fullscreen: true,
             title: 'FAQ',
             displayField: 'text',
             store: store
         });

        // Initialize the main view
        Ext.Viewport.add(Ext.create('MACSF.view.Main'));
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
