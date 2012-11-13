Ext.define('Kiva.view.detail.Information', {
    extend: 'Ext.Container',
    xtype: 'detailInformation',
    requires: ['Ext.XTemplate'],

    config: {
        cls: 'detail-card',
        styleHtmlContent: true,
        scrollable: {
            direction: 'vertical',
            directionLock: true
        },

        tpl: Ext.create('Ext.XTemplate',
            '<h1>{name}</h1>',
            '<h2><tpl if="location.town">{location.town}, </tpl>{location.country}</h2>',
            '<p class="overview">',
                '<strong>Profession:</strong> {activity}<br />',
                '<strong>Spécialité:</strong> {sector}<br />',
            '</p>',
            '<p><strong>Informations:</strong><br />{description}</p>'
            // {compiled: true}
        )
    }
});