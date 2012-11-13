Ext.define('SenchaCoverFlow.view.MyCover', {
	extend: 'Ext.ux.Cover',

	xtype: 'mycover',


	config: {

		itemCls: 'my-cover-item',
		//*
		//These are just for demo purposes.
		height: (Ext.os.deviceType !== 'Phone')? 150: undefined,
		width: (Ext.os.deviceType !== 'Phone')? 600: undefined,
		//end-demo//*/
		itemTpl : [
			'<div >',
		    '<div class="image"><tpl if="image"><img  src="{image}"></tpl></div>',
		    '<div class="titre">{titre}</div>',
		    '</div>'
		],
		store : {
		    fields: ['titre', 'image'],
		    data: [
		        {titre: 'Actualités', image: 'resources/images/1 (21).png'},
		        {titre: 'Sites & Agences', image: 'resources/images/1 (23).png'},
		        {titre: 'Contact', image: 'resources/images/1 (24).png'},
		        {titre: 'FAQ', image: 'resources/images/1 (25).gif'},
		        {titre: 'Recherche', image: 'resources/images/1 (28).png'},
		        {titre: 'Annuaire pro', image: 'resources/images/1 (31).png'},
		        {titre: 'Mon Compte', image: 'resources/images/1 (32).png'},
		        {titre: 'Rendez-Vous', image: 'resources/images/1 (32).png'},
		        {titre: 'Sinistre', image: 'resources/images/1 (31).png'},
		    ]
		 },
		selectedIndex: 4,
	}
});