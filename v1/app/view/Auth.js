Ext.define("SenchaCoverFlow.view.Auth",{

	extend: 'Ext.form.Panel',
	xtype:'AuthForm',

	config: {
		title:'Connexion',
		iconCls:'user',

		items:[
		{
			xtype: "toolbar",
            docked: "top",
            title: "Authentification",            


            items:[
            	{
            		xtype:'button',
					text:'Menu',
					ui:'action'

            	}
            ]
		},
		{
			xtype: 'image',
            src: 'resources/images/logo-mehdi.png',
            height: 200,
    		width: 590, 
    		style: 'margin:auto'   		
    		
		},
		{
			xtype:'fieldset',			
			title:'Authentification',


			items:[
				{
					xtype:'numberfield',
					name:'num',
					label:'Numéro du compte'		
				},
				{
					xtype:'numberfield',
					name:'cle',
					label:'Clé'		
				}				
			]			
		},		
		{
			xtype:'spacer',
			height:10
		},
		{
			xtype:'fieldset',
			instructions:'Veillez ne saisir que des chiffres pour les trois champs',						

			items:[
				{
					xtype:'passwordfield',
					name:'secNum',
					label:'Numéro secret'		
				}
			]			
		},
		{
					xtype:'button',
					text:'Se Connecter',
					ui:'decline'
				}				

		]		
	}

});