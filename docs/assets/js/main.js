---
exclude_in_search: true
layout: null
---
(function($) {
    'use strict';
    $(function() {
        $('[data-toggle="tooltip"]').tooltip();
        $('[data-toggle="popover"]').popover();
        $('.popover-dismiss').popover({
            trigger: 'focus'
        })
    });

    function bottomPos(element) {
        return element.offset().top + element.outerHeight();
    }
    $(function() {
        var promo = $(".js-td-cover");
        if (!promo.length) {
            return
        }
        var promoOffset = bottomPos(promo);
        var navbarOffset = $('.js-navbar-scroll').offset().top;
        var threshold = Math.ceil($('.js-navbar-scroll').outerHeight());
        if ((promoOffset - navbarOffset) < threshold) {
            $('.js-navbar-scroll').addClass('navbar-bg-onscroll');
        }
        $(window).on('scroll', function() {
            var navtop = $('.js-navbar-scroll').offset().top - $(window).scrollTop();
            var promoOffset = bottomPos($('.js-td-cover'));
            var navbarOffset = $('.js-navbar-scroll').offset().top;
            if ((promoOffset - navbarOffset) < threshold) {
                $('.js-navbar-scroll').addClass('navbar-bg-onscroll');
            } else {
                $('.js-navbar-scroll').removeClass('navbar-bg-onscroll');
                $('.js-navbar-scroll').addClass('navbar-bg-onscroll--fade');
            }
        });
    });
}(jQuery));
(function($) {
    'use strict';
    var Search = {
        init: function() {
            $(document).ready(function() {
                $(document).on('keypress', '.sidebar__search-input', function(e) {
                    if (e.keyCode !== 13) {
                        return
                    }
                    var query = $(this).val();
                    var searchPage = "{{ site.baseurl }}/search/?q=" + query;
                    document.location = searchPage;
                    return false;
                });
            });
        },
    };
    Search.init();
}(jQuery));


/*popup-hidden-div*/

function HideToggleFunction() {
    var hide = document.getElementById("hiddendiv");
    if (hide.style.display === "block") {
      hide.style.display = "none";
    } else {
      hide.style.display = "block";
    }
  }

/*clipboard*/

var getcodeelement = $('.clipboardjs'); /*create custom id*/

getcodeelement.each(function(i) {  
    /*target*/
    var currentId = 'codeblock' + (i + 1);
    $(this).attr('id', currentId);

    /*trigger*/
    var text = $(this).text();
    text = text.replace(/\$ /gi, '');
    var clipButton = '<div class="btn-copy-wrap"><button class="clipbtn" data-clipboard-text="' + text + '" data-clipboard-target="#' + currentId + '"><i class="far fa-copy"></i></button></div>';
       $(this).after(clipButton);
});

new Clipboard('.clipbtn');
const toggleBtnSidebarNav=document.querySelector(".nav-toggle-btn--document");

toggleBtnSidebarNav.addEventListener("click",()=>{
    let sidebarNav=document.querySelector(".left-container")
    if(sidebarNav){
        sidebarNav.classList.toggle("left-container--active")
    }
})

const toggleBtnMainNav=document.querySelector(".nav-toggle-btn--main");

toggleBtnMainNav.addEventListener("click",()=>{
    let sidebarNav=document.getElementById("main_navbar")
    if(sidebarNav){
        sidebarNav.classList.toggle("main-navbar--active")
    }
})