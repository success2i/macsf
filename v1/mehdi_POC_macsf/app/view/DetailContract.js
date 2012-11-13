Ext.define("POC.view.DetailContract",{

	extend: 'Ext.form.Panel',
	xtype:'DetContForm',

	config: {
		title:'Detail',
		iconCls:'settings',

		items:[
		{
			xtype: "toolbar",
            docked: "top",
            title: "NISSAN  Micra",            

            items:[
            	{
            		xtype:'button',
					text:'...',					
					ui:'action'
            	},
            	{
            		xtype:'button',
					text:'Retour',
					ui:'back'
            	},
            	/*{
					xtype: 'image',
		            src: 'resources/images/cont.png',
		            height: 54,
		    		width: 60, 
		    		//style: 'margin:auto',
		    		docked:'right'   		
				}//*/
            ]
		},
		{
			xtype:'panel',
			layout:'vbox',

		    items:[
		        {
			    	xtype:'panel',					
					margin:'1 1 50 1',
					flex:1,

		    		items:[							
				    	    {
				    	    	xtype: 'image',
					            src: 'resources/images/cont.png',
					            height: 60,
					    		width: 60, 
					    		style:'float:left'
				    	    },
				    	    {
							 	xtype:'label',
								html:'N° Contrat : '								
				    	    },
				    	    {
							 	xtype:'label',
								html:'2134366 - 29D'							
				    	    }
				    ]	    
	    	    },
	    	    {
	    	    	xtype:'spacer',
	    	    	height:10
	    	    },
	    	    {
	    	    		
                        xtype: 'tabpanel',
                        height: 500,
                        tabBar:{
                        	layout:{
                        		pack:'center'
                        	}
                        },
                        activeTab:1,
                        scrollable:true,


                        items: [
                        	{
                                xtype: 'container',
                                title: 'Contrat',
                                
                                items: [
                                    {
                                        xtype:'fieldset',			
										instructions:' Informations supplementaires sur le contrat auto ',
										margin:'20',
										defaults:{
											labelWidth:'50%'
										},										

										items:[											
											{
												xtype:'textfield',
												name:'cot',
												label:'Cotisation annuelle TTC ',
												value:' 893 £',
												autoCapitalize:true,										
												readOnly:true		
											},
											{
												xtype:'textfield',
												name:'bon',
												label:'Bonus ',
												value:' 43 %',
												autoCapitalize:true,										
												readOnly:true		
											},
											{
												xtype:'textfield',
												name:'ech',
												label:'Date echéance ',
												value:' 01/ 11/ 2012',
												autoCapitalize:true,										
												readOnly:true		
											},
											{
												xtype:'textfield',
												name:'pai',
												label:'Paiement par ',
												value:' Prélèvement ',
												autoCapitalize:true,										
												readOnly:true		
											},
											{
												xtype:'textfield',
												name:'men',
												label:'Mensuel ',
												value:' 67 £',
												autoCapitalize:true,										
												readOnly:true		
											},
											{
												xtype:'textfield',
												name:'rib',
												label:'RIB ',												
												autoCapitalize:true,										
												readOnly:true		
											}
										]
									}		
                                ]
                            },
                            {
                                xtype: 'container',
                                title: 'Véhicule',
                                autoDestroy: false,
                                items: [
                                    {
                                        xtype:'fieldset',			
										instructions:' Informations sur le véhicule ',
										margin:'20',
										defaults:{
											labelWidth:'35%'
										},										

										items:[
											{
												xtype:'textfield',
												name:'veh',
												label:'Véhicule ',
												value:' NISSAN  Micra  K12  1.5  Essence',
												autoCapitalize:true,										
												readOnly:true		
											},
											{
												xtype:'textfield',
												name:'mat',
												label:'Immatriculation ',
												value:' AYW -  7653 - CC',		
												autoCapitalize:true,										
												readOnly:true
											}				
										]                                        
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                title: 'Conducteurs',
                                items: [
									{
										xtype:'fieldset',			
										instructions:' Informations sur les conducteurs du véhicule ',
										margin:'20',
										defaults:{
											labelWidth:'40%'
										},										

										items:[
											{
												xtype:'textfield',
												name:'nom',
												label:'Nom ',
												value:' Fabrice KOLLET ',												
												autoCapitalize:true,										
												readOnly:true		
											},
											{
												xtype:'textfield',
												name:'nee',
												label:'Date naissance ',
												value:' 13/ 09/ 1982',		
												autoCapitalize:true,										
												readOnly:true
											},
											{
												xtype:'textareafield',
												name:'usage',
												label:'Usage ',
												value:' privés et trajet domicile-lieu de travail (salarié)',		
												autoCapitalize:true,										
												readOnly:true
											}

										]   
									}                                                                    
                                ]
                            },
                            {
                                xtype: 'container',
                                title: 'Garanties',
                                items: [
                                    {
                                        xtype:'fieldset',			
										instructions:' Informations sur la couverture de votre assurance auto ',
										margin:'20',
										defaults:{
											labelWidth:'50%'
										},										

										items:[
											{
												xtype:'textfield',
												name:'res',
												label:'Responsabilité civile ',
												autoCapitalize:true,										
												readOnly:true		
											},
											{
												xtype:'textfield',
												name:'dom',
												label:'Dommages ',	
												value:'Franchise: 340 £',	
												autoCapitalize:true,										
												readOnly:true
											},
											{
												xtype:'textfield',
												name:'bv',
												label:'Bris de vitres ',
												value:'Franchise: 89 £',			
												autoCapitalize:true,										
												readOnly:true
											},
											{
												xtype:'textfield',
												name:'vi',
												label:'Vol  /  Incendie ',
												value:'Franchise: 273 £',			
												autoCapitalize:true,										
												readOnly:true
											},
											{
												xtype:'textfield',
												name:'cn',
												label:'Catastrophe naturelle ',		
												autoCapitalize:true,										
												readOnly:true
											},
											{
												xtype:'textfield',
												name:'ass',
												label:'Assistance ',
												autoCapitalize:true,												
												readOnly:true
											},
											{
												xtype:'textfield',
												name:'pan',
												label:'Pannes mecaniques ',	
												value:'Franchise: 156 £',	
												autoCapitalize:true,											
												readOnly:true
											}																								
										]                                        
                                    }
                                ]
                            }
                        ]
                    }
						    	    
	    	]    
		},
		{
			xtype: 'image',
            src: 'resources/images/ph.gif',
            height: 150,
    		width: 300, 
    		style: 'margin:auto',
    		docked:'bottom'   		
		}

	  ]			
	}

});