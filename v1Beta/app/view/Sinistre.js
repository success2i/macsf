Ext.define("SenchaCoverFlow.view.Sinistre", {
    extend: 'Ext.tab.Panel',
    xtype:'sinistre',
    
    requires: [
        'Ext.TitleBar',
        'Ext.Video',
        'Ext.device.Communicator',
        'Ext.device.camera.PhoneGap',
        'Ext.device.camera.Sencha',
        'Ext.device.camera.Simulator',
        'Ext.device.camera'
    ],
    
    config: {
        tabBarPosition: 'bottom',
        items: [
        {
            xtype: 'map',
            useCurrentLocation: true,
            title: 'Lieu',
            iconCls: 'maps',
            id: 'myMap',
            mapOptions: {
                zoom: 18,
                navigationControl: true,
                navigationControlOptions: 
                {
                    style: (typeof google!='undefined') ? google.maps.NavigationControlStyle.DEFAULT : ''
                }
            },
            listeners:{
                painted :function(myMap, eOpts){
                    //var myMap = Ext.getCmp('myMap');
                    if (typeof google != 'undefined') {
                         var marker = new google.maps.Marker({
                             position: myMap.center,
                             title : 'sinistre',
                             map: myMap
                         });
                   }
                }
            }
        },{
            xtype:'panel',
            title: 'Photo',
            iconCls: 'download',
            listeners: {
                show: function(list, opts){
                    Ext.device.Camera.capture({
                        success: function(image) {
                            //imageView.setSrc(image);
                            alert('sucess');
                        },
                      quality: 75,
                      width: 200,
                      height: 200,
                      destination: 'data'
                    });
                }
            }
        },{
            xtype:'formpanel',
            iconCls:'info',
            title:'Infos',
            items:[{
                xtype: 'sliderfield',
                label: 'Gravité',
                is:'sl',
                value: 0,
                minValue: 0,
                maxValue: 3,
                listeners:{
                    painted: function (sl) {
                                    libGravite = Ext.getCmp('libGravite');
                                }, 
                    change:function(field,newValue) {
                        newV = newValue.getValue();
                        if(newV==0) {
                           libGravite.setValue('Pas grave');     
                        }else if(newV==1) {
                           libGravite.setValue('Moyen');    
                        }else if(newV==2){
                            libGravite.setValue('Grave');    
                        }else{
                            libGravite.setValue('Très grave');    
                        }
                    }
                }
            },{
                xtype: 'textfield',
                style:'align:center;',
                id: 'libGravite',
                readOnly: true
            },{
                xtype:'textareafield',
                label:'Description'
            }
            ]
        }


            
        ]
    }
});
