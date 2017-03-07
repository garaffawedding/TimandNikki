$(document).ready(function(){
 preloader();
 /*hamburger();*/
 scrollto();
 animations();
 password();
 splittext();
});

function preloader() {
  //<![CDATA[
        $(window).on('load', function() { // makes sure the whole site is loaded 
            $('#status').fadeOut(); // will first fade out the loading animation 
            $(".loader").delay(10).queue(function(){
               $(this).addClass("animate").dequeue();
            });
             $(".header").delay(10).queue(function(){
               $(this).addClass("animate").dequeue();
            });
              $(".footer").delay(10).queue(function(){
               $(this).addClass("animate").dequeue();
            });
               $(".hero").delay(10).queue(function(){
               $(this).addClass("animate").dequeue();
            });
            setTimeout(function(){
               document.getElementById("HeroVideo").play();
            }, 2200);
            $("body").addClass("stop-scrolling").delay(6500).queue(function(){
               $(this).removeClass("stop-scrolling").dequeue();
            });
           $("#loader").delay(6500).queue(function(){
               $(this).addClass("u-display-none").dequeue();
            });
        })
    //]]>
}

/*function hamburger() {
 var $hamburger = $(".hamburger");
 $hamburger.on("click", function(e) {
   $hamburger.toggleClass("is-active");
   $(".menu").toggle("visible");
 });
 $('.menu li a').on('click', function(e){
       $hamburger.toggleClass("is-active");
       $(".menu").toggle("visible");
 });
}*/

$('button').click(function() {
  $(this).toggleClass('expanded').siblings('div').slideToggle();
});

function scrollto() {
 window.scrollTo(0,0);
}

function scrollsnap() {
  $(window).one('scroll', function () {
       //var top = $('#content').scrollTop();
       var top1 = $('#Trigger-One').offset().top;
      
       $("body").animate({
           scrollTop: top1
       }, 2000, 'swing');
   });


   $view = $(window).height();
   $feature = $('#hero');
   $feature.css('height', $view + 'px');
}

function scrollto() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
}

function password() {
  $('.rsvpform-password').submit(function(e) {
    if ( $('input[name="dance"]').val() === 'JBWedding2017-Guest' ) {
      $('#rsvpform-full').show();
      $('.rsvpform-password').hide();
      $('.rsvperror').hide();
  }
  else if ( $('input[name="dance"').val() != 'JBWedding2017-Guest' ) {
   $('.rsvperror').show();
    }
    event.preventDefault();  
  })
}

function animations() {
    var controller = new ScrollMagic.Controller({});
    //-------SetUps-------

      // Flower One
    var tween = new TimelineMax ()
      .add([
        TweenMax.fromTo(".bio-pics", 1, {top: 300}, {top: -350, ease: Linear.easeNone}),
        TweenMax.fromTo(".flower-one", 1, {top: 300}, {top: 0, ease: Linear.easeNone})
      ]);
    // F1 - build scene
    var scene = new ScrollMagic.Scene({triggerElement: "#Trigger-One", duration: $(window).width()})
      .setTween(tween)
      .addTo(controller);

      // Wedding
    var tween = new TimelineMax ()
      .add([
        TweenMax.fromTo(".cbvillage", 1, {top: 150}, {top: -35, ease: Linear.easeNone}),
        TweenMax.fromTo(".map", 1, {top: 300}, {top: -0, ease: Linear.easeNone})
      ]);
    // Wedding - build scene
    var scene = new ScrollMagic.Scene({triggerElement: "#Trigger-Three", duration: $(window).width()})
      .setTween(tween)
      .addTo(controller);

      // Flower Two
    var tween = new TimelineMax ()
      .add([
        TweenMax.fromTo(".flower-two", 1, {top: -45}, {top: -350, ease: Linear.easeNone}),
      ]);
    // F2 - build scene
    var scene = new ScrollMagic.Scene({triggerElement: "#Trigger-Four", duration: $(window).width()})
      .setTween(tween)
      .addTo(controller);

    ScrollMagic._util.addClass = function _patchedAddClass(elem, classname) {
    if (classname) {
    if (elem.classList) {
    classname.split(' ').forEach(function _addCls(c) {
    elem.classList.add(c);
    });
    } else elem.className += ' ' + classname;
    }
    };
    ScrollMagic._util.removeClass = function _patchedRemoveClass(elem, classname) {
    if (classname) {
    if (elem.classList) {
    classname.split(' ').forEach(function _removeCls(c) {
    elem.classList.remove(c);
    });
    } else elem.className = elem.className.replace(new RegExp('(^|\b)' + classname.split(' ').join('|') + '(\b|$)', 'gi'), ' ');
    }
    };

    var elements = ['.form'];

    // Init ScrollMagic Controller
    var ctrl = new ScrollMagic.Controller();

    // Create a ScrollMagic Scene
    new ScrollMagic.Scene({
      triggerElement: "#formreveal-trigger"
    })
    .setClassToggle('.form','r-animate s-animate v-animate h3-animate p-animate form-animate')
    .addTo(ctrl);
}

function splittext() {
  var ctrl2 = new ScrollMagic.Controller();
  $(".a-s").each(function (index, elem) {
      var tween = TweenMax.to(elem, 0.375, {opacity:1, easeOut:Sine.easeOut});
      new ScrollMagic.Scene({
          offset: 180,
          triggerElement: elem,
          triggerHook: "onEnter",
          reverse: false
      })
      .setTween(tween)
      .addTo(ctrl2)
  });
}


 $(document).ready(function(){
        //Examples of how to assign the Colorbox event to elements
        $(".group1").colorbox({rel:'group1'});
        $(".group2").colorbox({rel:'group2', transition:"fade"});
        $(".group3").colorbox({rel:'group3', transition:"none", width:"75%", height:"75%"});
        $(".group4").colorbox({rel:'group4', slideshow:true});
        $(".ajax").colorbox();
        $(".youtube").colorbox({iframe:true, innerWidth:640, innerHeight:450});
        $(".vimeo").colorbox({iframe:true, innerWidth:500, innerHeight:409});
        $(".iframe").colorbox({iframe:true, width:"80%", height:"80%"});
        $(".inline").colorbox({inline:true, width:"50%"});
        $(".callbacks").colorbox({
          onOpen:function(){ alert('onOpen: colorbox is about to open'); },
          onLoad:function(){ alert('onLoad: colorbox has started to load the targeted content'); },
          onComplete:function(){ alert('onComplete: colorbox has displayed the loaded content'); },
          onCleanup:function(){ alert('onCleanup: colorbox has begun the close process'); },
          onClosed:function(){ alert('onClosed: colorbox has completely closed'); }
        });

        $('.non-retina').colorbox({rel:'group5', transition:'none'})
        $('.retina').colorbox({rel:'group5', transition:'none', retinaImage:true, retinaUrl:true});
        
        //Example of preserving a JavaScript event for inline calls.
        $("#click").click(function(){ 
          $('#click').css({"background-color":"#f00", "color":"#fff", "cursor":"inherit"}).text("Open this window again and this message will still be here.");
          return false;
        });
      }); 
