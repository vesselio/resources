$(document).ready(function() {
    var tabs = 
    {
        init : function() {
            this.applyPreviousActiveTab();
            this.addListener('a[data-toggle="tab"]');
        },
        tabClickCallback : function(event) {
            var $target = $(event.target),
                href = $target.attr('href');

            this.setActiveTab(href);
        },
        addListener : function(selector) {
            $(selector).on('click', function(event){
                tabs.tabClickCallback(event);
            });
        },
        getActiveTab : function() {
            return localStorage.getItem('activetab');
        },
        setActiveTab : function(href) {
            localStorage.setItem('activetab', href);
        },
        applyPreviousActiveTab : function() {
            var href = this.getActiveTab();
            if(href){
                $('a[href="' + href + '"]').tab('show');
            }
        }
    };
    tabs.init();
});