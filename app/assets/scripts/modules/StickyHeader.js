import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
    constructor() {
        this.siteHeader = $('.site-header');
        this.headerTriggerElement = $('.large-hero__title');
        this.createHeaderWaypoint();
        this.pageSections = $('.page-section');
        this.headerLinks = $('.primary-nav a');
        this.createPageSectionWaypoints();
        this.addSmoothScroll();
    }

    addSmoothScroll(){
        this.headerLinks.smoothScroll();
    }

    createHeaderWaypoint() {
        var self = this;
        new Waypoint({
            element: this.headerTriggerElement[0],
            handler: function(direction) {
                if (direction == 'down') {
                    self.siteHeader.addClass('site-header--dark');
                } else {
                    self.siteHeader.removeClass('site-header--dark');
                }
            }
        });
    }

    createPageSectionWaypoints() {
        var self = this;

        this.pageSections.each(function() {
            var currentPageSection = this;

            new Waypoint({
                element: currentPageSection,  
                handler: function(direction) {
                    if(direction == 'down') {
                        var matchingHeader = currentPageSection.getAttribute('data-matching-link');
                        self.headerLinks.removeClass('is-current-link');
                        $(matchingHeader).addClass('is-current-link');
                    }
                },
                offset: "18%",
            });

            new Waypoint({
                element: currentPageSection,  
                handler: function(direction) {
                    if(direction == 'up') {
                        var matchingHeader = currentPageSection.getAttribute('data-matching-link');
                        self.headerLinks.removeClass('is-current-link');
                        $(matchingHeader).addClass('is-current-link');
                    }
                },
                offset: "-40%",
            });
        }); 
    }

}

export default StickyHeader;