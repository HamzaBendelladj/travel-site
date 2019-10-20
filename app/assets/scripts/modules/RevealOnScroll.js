import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
    constructor(el, offset) {
        this.itemsToReveal = el; 
        this.offsetPercentage = offset;
        this.hideInititally();
        this.createWaypoints();
    }

    hideInititally() {
        this.itemsToReveal.addClass('reveal-item');
    }


    createWaypoints() {
        var self = this;
        this.itemsToReveal.each(function() {
            var currentItem = this;
            new Waypoint({
                element: currentItem,
                handler: function() {
                    $(currentItem).addClass('reveal-item--is-visible');
                },
                offset: self.offsetPercentage,
            });
        });
    }
    
}

export default RevealOnScroll;