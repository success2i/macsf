Ext.define('SenchaCoverFlow.controller.AccueilTrans', {
    extend: 'Ext.app.Controller',

    slideLeftTransition: {
            type: 'slide',
            direction: 'left'
    },
    
    config: {
        refs: {
            
        },
        control: {
            'mycover' : {
                itemdoubletap : 'slide'
            }
        }
    },

    slide : function(cover, idx){ 
        if (idx==5)  //Annuaire des professionnels
            var slideView = Ext.create('SenchaCoverFlow.view.Annuaire');
        else if (idx==3)  {//FAQ : reste affichage nestedList
            var slideView = Ext.create('SenchaCoverFlow.view.Faq');
        }
        else if (idx==8)  {//Sinistre
            var slideView = Ext.create('SenchaCoverFlow.view.Sinistre');
        }
        else if (idx==6)  {//Compte
            var slideView = Ext.create('SenchaCoverFlow.view.Compte');
        }
        else if (idx==7)  {//Agenda+prise de rdv
            var slideView = Ext.create('SenchaCoverFlow.view.Rdv');
        }
        else 
            var slideView = Ext.create('SenchaCoverFlow.view.slideView');
        
        Ext.Viewport.animateActiveItem(slideView, this.slideLeftTransition);

    }
});