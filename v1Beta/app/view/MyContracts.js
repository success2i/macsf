Ext.define("SenchaCoverFlow.view.MyContracts",{

	extend: 'Ext.form.Panel',
	xtype:'MyContForm',

	config: {
		title:'Contrats',
		iconCls:'info',

		items:[
		{
			xtype: "toolbar",
            docked: "top",
            title: "Mes Contrats",                          
            
            items:[
            	{
            		xtype:'button',
					text:'Menu',
					ui:'action',

            	}
            ]
		},
		{		
			
            xtype:'panel',
			docked:'top',
			scrollable:true,

			items:[
						{
							xtype:'panel',
							docked:'left',

						    items:[
								{
								xtype: 'image',
					            src: 'resources/images/profile.jpg',
					            height: 200,
					    		width: 210, 
					    		margin:'10 10 1 30',
					    		docked:'top'
					    	    },
					    		{
								xtype:'label',
								html:'N° 700 99 12',
								margin:'1 5 5 50'
							    },
							    {
								xtype:'label',
								html:'Mr. Fabrice KOLLET',
								margin:'5 5 5 50'
							    }
							]    
				    		
						},		
						{
							xtype:'fieldset',			
							title:'Coordonées',

							items:[
								{
									xtype:'textfield',
									name:'tel',
									label:'Telephone',
									value:'0123 212 981 12',
									readOnly:true		
								},
								{
									xtype:'spacer',
									height:5
								},
								{
									xtype:'textfield',
									name:'mail',
									label:'Email',
									value:'fabrice@hotmail.com',
									readOnly:true				
								},
								{
									xtype:'spacer',
									height:5
								},
								{
									xtype:'textareafield',
									name:'adr',
									label:'Adresse',
									value:'24 Rue des pins maritimes ,   Bloc < H >   ,    N°12  ,    Paris   ,     FRANCE ',
									readOnly:true				
								}				
							]			
						}

			]			
		},
		{
			xtype:'panel',
			layout:'hbox',

			margin:'1% 1% 1% 1%',			

		    items:[
				{
				xtype: 'image',
	            src: 'resources/images/car.png',
	            height: 150,
	    		width: 150, 
	    		flex:1,
	    		onTouchPadEvent: function(e) {
        			alert('Car tapped!');
    				}	    		
	    	    },
	    		{
				xtype: 'image',
	            src: 'resources/images/home.gif',
	            height: 150,
	    		width: 150, 
	    		flex:2
			    },
			    {
				xtype: 'image',
	            src: 'resources/images/euro.png',
	            height: 150,
	    		width: 150, 
	    		flex:3
			    }
			]    
		}		

	  ]		
	}

});