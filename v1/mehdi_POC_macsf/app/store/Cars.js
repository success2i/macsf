Ext.define('POC.store.Cars',{
	extend:'Ext.data.Store',

	config:{
		model: 'POC.model.Car',
		sorters:'Marque',
		grouper: function(record){
			return record.get('Marque')[0];
		},

		data:[
			{Marque:'NISSAN',Nom: 'Micra'},
			{Marque:'NISSAN',Nom: 'Qashqai'},
			{Marque:'FIAT',Nom: '500'},
			{Marque:'FIAT',Nom: 'Punto'},
			{Marque:'RENAULT',Nom: 'Clio'},
			{Marque:'PEUGEOT',Nom: '207'},
			{Marque:'AUDI',Nom: 'A6'},
			{Marque:'SEAT',Nom: 'Ibiza'}
		],

	}

});