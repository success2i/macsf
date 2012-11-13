Ext.define("SenchaCoverFlow.view.ListContracts",{

	extend: 'Ext.dataview.List',
	xtype:'LstContForm',
	

	config: {
		title:'Liste',
		iconCls:'more',
		ui:'round',
		itemTpl:'{Marque}  {Nom}',
		store:'Cars',
		grouped:true,
		indexBar:true,
		onItemDisclosure: function(){
			alert('Detail Info !!');
		},


		items:[
		{
			xtype: "toolbar",
            docked: "top",
            title: "Mes contrats auto",            

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
            	}
            ]
		},
		{
			xtype: 'image',
            src: 'resources/images/auto.png',
            height: 120,
    		width: 300, 
    		style: 'margin:auto',
    		docked:'bottom'   		
		}

	   ]		
	}

});
