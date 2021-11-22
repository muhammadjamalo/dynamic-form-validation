$(document).ready(function() {
    ottu.init({

        slick: $(".slick-instance")


    });
});
var self;
var ottu = {
    init: function(options) {
        this.settings = options;
        self = this;

        this.utilities();
        this.loader();
        // this.configureModal();

        // this.windowScroll();

        // this.addMoreFiles();

        // lazyload.load(".table.vendor-order-listing .table__body", 'src/data/vendor-order-listing.html');
        // lazyload.load(".table.vendor-company-listing .table__body", 'src/data/vendor-company-listing.html');
        // lazyload.load(".screens__listing .screens", 'src/data/screen-listing.html');


        this.stickyHeader();
    },
    loader: function() {
        setTimeout(function() {
            $('body').addClass('loaded');
        }, 3000);
    },
    stickyHeader: function() {
        $(window).scroll(function() {
            // if($(window).width() > 767){ 

            // }
            if ($(this).scrollTop() > 270) {
                $("header").addClass("sticky");
                /*$(".top-bar").slideUp(500);*/
            } else {
                $("header").removeClass("sticky");
                // $(".top-bar").slideDown(500);
            }
        });

    },



    utilities: function() {
        // aos Animation
        AOS.init({
            delay: 100, // values from 0 to 3000, with step 50ms
            duration: 900, // values from 0 to 3000, with step 50ms 
            disable: 'mobile',
        });





        setTimeout(function() {
            $(".slick-instance").slick();

        }, 300);

        $(".menu-icon").click(function(e) {
            e.preventDefault();
            $("body").toggleClass("menu-active");
        });

        $("li.search button").click(function(e) {
            e.preventDefault();
            $("li.search form").addClass("search-active");
        });

        $(".close-search").click(function(e) {
            e.preventDefault();
            $("li.search form").removeClass("search-active");
        });
    },







};