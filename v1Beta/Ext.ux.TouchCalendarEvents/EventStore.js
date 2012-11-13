Ext.define("Event", {
    extend: "Ext.data.Model",
    config: {
        fields: [{
            name: 'event',
            type: 'string'
        }, {
            name: 'location',
            type: 'string'
        }, {
            name: 'start',
            type: 'date',
            dateFormat: 'c'
        }, {
            name: 'end',
            type: 'date',
            dateFormat: 'c'
        }]
    }
});
function getYoumPlus(i) {
    var d = new Date();
    d.setDate(new Date().getDate() + i);
    return d;
}

var eventStore = Ext.create('Ext.data.Store', {
    model: 'Event',
    data: [{
        event: 'Non disp.',
        location: '',
        title: 'test',
        start: new Date(),
        end: new Date()
    }, {
        event: '',//'<b style="color:green;z-index:0">Disponible</b>',
        location: '10h à 12h',
        start: getYoumPlus(1),
        end: getYoumPlus(1)
    }, {
        event: '',
        location: '13h à 14h30',
        start: getYoumPlus(2),
        end: getYoumPlus(2)
    }, {
        event: 'Non Disp.',
        location: '',
        start: getYoumPlus(3),
        end: getYoumPlus(3)
    }
    , {
        event: '',
        location: '8h à 12h',
        start: getYoumPlus(4),
        end: getYoumPlus(4)
    }
    ]
});
