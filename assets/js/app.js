(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

/*------------------------------
    Detact Mobile Browser
-------------------------------*/

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    location.href = "cv/";
} else {
    console.log($(window).width());
    //SLID
    class IndexForSib {

        static get(el) {
            let children = el.parentNode.children;
            for (var i = 0; i < children.length; i++) {
                let child = children[i];
                if (child == el) return i;
            }
        }
    }
    class Slider {
        constructor(selector) {
            this.move = this.move.bind(this);
            this.moveByButton = this.moveByButton.bind(this);
            this.slider = document.querySelector(selector);
            this.itemsCount = document.querySelectorAll(".tab-content-container > *").length;
            this.interval = null;
            this.contador = 0;
            //this.start();
            this.bindEvents();
            this.buildControls();
        }

        start() {
            this.interval = window.setInterval(this.move, 2000);
        }
        buildControls() {
            for (var i = 0; i < this.itemsCount; i++) {}
        }
        move() {
            this.contador++;
            if (this.contador > this.itemsCount - 1) {
                this.contador = 0;
            }
            this.moveTo(this.contador);
        }
        resetIndicator() {
            document.querySelectorAll(".circle-container li.activeli").forEach(item => item.classList.remove("activeli"));
        }
        bindEvents() {
            document.querySelectorAll(".circle-container li.item").forEach(item => {
                item.addEventListener("click", this.moveByButton);
            });
        }
        moveByButton(ev) {
            let index = IndexForSib.get(ev.currentTarget);
            this.contador = index;
            this.moveTo(index);
        }

        moveTo(index) {
            let top = index * 100;
            this.resetIndicator();
            $(".circle-container  li:nth-child(" + (index + 1) + ")").addClass("activeli");
            var element = $('.tab-content-container');

            element.css({ "top": "-" + top + "vh" });
        }
    }

    window.onload = function () {
        $('body').removeClass('fade');
    };
    $(document).ready(function () {

        new Slider(".tab-content-container");
        var b = $('.tring-fixed_2');
        var cw = b.offset();
        console.log(cw);
        $('.brand').click(function () {

            $('.brand').toggleClass('nasti');
        });
        $('.nav-link').click(function () {
            $('.circle-container li:first-child').click();
            $.fn.fullpage.moveTo(3);
            var svg_1 = $('.tring-fixed');
            var svg_2 = $('.tring-fixed_2');
            var nav_b = $('#exta');
            svg_1.css('transform', 'translate(-130px)');
            svg_2.css({ transform: "translateX(280px) translateY(500px)" });
            nav_b.css({ left: '-150px' });
            var fixed_menu_in = anime({ targets: ' .nav-fixed', easing: 'easeOutExpo', translateX: 0 });
            $('#fp-nav').css('top', '90%');
        });

        var keyframes = anime({
            targets: '.page-- .rightFade',
            easing: 'easeOutExpo',
            translateX: [{ value: 0, duration: 2500, elasticity: 0 }],
            opacity: {
                value: [0, 1],
                duration: 3500
            }
        });

        var tring = anime({
            targets: ' .tring',
            easing: 'easeOutExpo',
            translateX: [{ value: 0, duration: 3500, elasticity: 0 }],
            opacity: {
                value: [0, 1],
                duration: 3500
            }
        });
        var bd2 = anime({
            targets: '.bd2',
            rotate: '315deg',
            easing: 'easeOutExpo',
            duration: 3000
        });
        var tring2 = anime({
            targets: ' .tring2',
            easing: 'easeOutExpo',
            translateX: [{ value: 0, duration: 3500, elasticity: 0 }],
            opacity: {
                value: [0, 1],
                duration: 3500
            }
        });

        $('.slick').slick({
            dots: true,
            vertical: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: false,
            centerPadding: '60px',
            centerMode: true,
            verticalSwiping: true
        });
        var $getPosi = $('.slick-dots li').on('click', function (e) {
            var currentIndex = $('.slick-current').attr('data-slick-index');
            currentIndex++;
            $('.caption').html('Slide number: ' + currentIndex);
        });

        $('.slick-next').on('click', function (e) {
            var currentIndex = $('.slick-current').attr('data-slick-index');
            currentIndex++;
            $('.caption').html('Slide number: ' + currentIndex);
        });

        $('.slick-prev').on('click', function (e) {
            var currentIndex = $('.slick-current').attr('data-slick-index');
            currentIndex++;
            $('.caption').html('Slide number: ' + currentIndex);
        });

        $('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide, i) {
            console.log('beforeChange', currentSlide, nextSlide);
        });
        $('.slider').on('afterChange', function (event, slick, currentSlide) {
            console.log('afterChange', currentSlide);
        });
        $('#fullpage').fullpage({
            menu: '#menu',
            navigation: true,
            slidesNavigation: true,
            navigationPosition: 'left',
            navigationTooltips: ['- 01', '- 02', '- 03', '- 04'],
            showActiveTooltip: true,
            lockAnchors: true,
            easing: 'easeInOutCubic',
            easingcss3: 'ease',

            //Accessibility
            keyboardScrolling: true,
            animateAnchor: true,
            recordHistory: true,
            //Design
            controlArrows: true,
            verticalCentered: true,

            anchors: ['firstPage', 'secondPage', 'fourPage', 'five'],
            afterLoad: function (anchorLink, index) {
                var loadedSection = $(this);
                var svg_1 = $('.tring-fixed');
                var svg_2 = $('.tring-fixed_2');
                var nav_b = $('#exta');
                //using index
                if (index == 1) {
                    $('.main-screen-fixed').addClass('is-none');
                    svg_1.css('transform', 'translate(-460px)');
                    svg_2.css('transform', 'translate(460px)');
                    nav_b.css('left', '-150px');
                    $('#exta1').css('left', '0');
                    $('.name-page').css({ transform: " translateY(0px)" });

                    var childNodes = $('#article_2').children();
                    for (var i = 0; i < childNodes.length; i++) {
                        if (childNodes[i].nodeType !== 6) {
                            childNodes[i].classList.remove("active");
                        }
                    }
                }
                if (index == 2) {
                    var childNodes = $('#article_2').children();
                    for (var i = 0; i < childNodes.length; i++) {
                        if (childNodes[i].nodeType !== 6) {
                            childNodes[i].classList.add("active");
                        }
                    }
                    svg_1.css('transform', 'translate(-130px)');
                    svg_2.css({ transform: "translateX(280px) translateY(500px)" });
                    nav_b.css({ left: '0' });
                }

                //using anchorLink
            },
            onLeave: function (index, nextIndex, direction) {
                var leavingSection = $(this);
                var nav_b = $('#exta');
                var svg_1 = $('.tring-fixed');
                var svg_2 = $('.tring-fixed_2');
                var nav_b = $('#exta');

                //after leaving section 2
                if (index == 1 && direction == 'down') {
                    $('.main-screen-fixed').removeClass('is-none');
                    $('#fp-nav ul li .fp-tooltip').css('color', '#131116');
                    var fixed_menu_in = anime({ targets: ' .nav-fixed', easing: 'easeOutExpo', translateX: 0 });
                } else if (index == 2 && direction == 'up') {
                    $('#fp-nav ul li .fp-tooltip').css('color', '#f8f8f8');
                    $('.tring-fixed').removeClass('is-none');
                    nav_b.css('left', '-150px');
                    //var fixed_menu_out = anime({targets: ' .nav-fixed',easing: 'easeOutExpo',opacity: {value: [0, 1],duration: 500}})
                    var fixed_menu_out = anime({ targets: ' .nav-fixed', easing: 'easeOutExpo', translateX: 200 });
                } else if (index == 2 && direction == 'down') {
                    $('#fp-nav').css('top', '90%');
                    nav_b.css({ left: '-150px' });
                    $('.com__nav').css({ transform: "translateX(0px)" });
                    svg_2.css({ transform: "translateX(-1077px) rotate(-19deg) translateY(-157px)" });
                    svg_1.css({ transform: "translateY(536px) translateX(-231px) rotate(57deg)" });
                    var fixed_menu_in = anime({ targets: ' .nav-fixed', easing: 'easeOutExpo', translateX: -1300 });
                } else if (index == 3 && direction == 'up') {
                    $('.nav-link').removeAttr('style');
                    $('#fp-nav').css('top', '50%');
                    $('.tring-fixed').removeClass('is-none');
                    nav_b.css('left', '-150px');
                    //var fixed_menu_out = anime({targets: ' .nav-fixed',easing: 'easeOutExpo',opacity: {value: [0, 1],duration: 500}})
                    var fixed_menu_in = anime({ targets: ' .nav-fixed', easing: 'easeOutExpo', translateX: 0 });
                    svg_1.css('transform', 'translate(-130px)');
                    svg_2.css({ transform: "translateX(280px) translateY(500px)" });
                } else if (index == 3 && direction == 'down') {
                    svg_1.css({ transform: "translateX(1264px) translateY(483px) rotate(9deg)" });
                    svg_2.css({ transform: "translateX(150px) rotate(52deg) translateY(-94px)" });
                    $('#fp-nav').css('top', '50%');
                    $('.nav-link').css({ 'left': '-200px', 'position': 'absolute' });
                    $('.com__nav').css({ transform: "translateX(100px)" });
                    var fixed_menu_in = anime({ targets: ' .nav-fixed', easing: 'easeOutExpo', translateX: 0 });
                } else if (index == 4 && direction == 'up') {
                    $('.com__nav').css({ transform: "translateX(0px)" });
                    $('#fp-nav').css('top', '90%');
                    nav_b.css({ left: '-150px' });
                    var fixed_menu_in = anime({ targets: ' .nav-fixed', easing: 'easeOutExpo', translateX: -1300 });
                    svg_2.css({ transform: "translateX(-1077px) rotate(-19deg) translateY(-157px)" });
                    svg_1.css({ transform: "translateY(536px) translateX(-231px) rotate(57deg)" });
                }
            }

            /*   afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex){
                 var loadedSlide = $(this);
            
                 //first slide of the second section
                 if(anchorLink == 'secondPage' && slideIndex == 1){
                   alert("First slide loaded");
                 }
                   //second slide of the second section (supposing #secondSlide is the
                 //anchor for the second slide)
                 if(index == 1 ){
                   alert("Second slide loaded");
                 }
               }
            */

        });
        var mright = '30px';

        var fader = $('#guide-content');
        var margin = mright;
        var child = 0;
        for (var j = 0; j < child; j++) {
            var child_parent = document.createElement('div');
            child_parent.className = 'child';
            fader.append(child_parent);
            $('.child').css('margin-right', margin);
        }

        //Nav UI
        var link = $('.com__nav-link');
        var linkParent = link.parent('li');
        var section = $('.com__section');
        var sectionContent = section.find('*');

        var switchTab = function () {
            var p = $(this).parent('li');
            var i = p.index();
            var s = section.eq(i);
            var c = s.find('*');

            section.removeClass('active');
            sectionContent.removeAttr('style');
            s.addClass('active');

            c.css({
                transform: 'none',
                opacity: 1
            });

            linkParent.removeClass('active');
            p.addClass('active');

            return false;
        };

        link.on('click', switchTab);

        function activeFirst() {
            section.first().addClass('active');
            section.first().find('*').css({
                transform: 'none',
                opacity: 1
            });
            linkParent.first().addClass('active');
        }

        activeFirst();
    });

    //PLUIN
    var s,
        smallCarousel = {
        setting: {
            $wrapper: $(".container"),
            $container: $(".circle-container"),
            $nodes: $(".circle-container > .item"),
            $_nodes: $(".circle-container > .item").length,
            $number: $(".number"),
            $numberItems: $(".number > li"),
            $current: 0,
            $isAuto: false,
            $acAuto: 6500
        },

        init: function () {
            s = this.setting;
            //this.addItems();
            this.initEvents();
        },
        initEvents: function () {

            window.requestAnimFrame = function () {
                return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback, element) {
                    window.setTimeout(callback, 1000 / 60);
                };
            }();

            window.requestInterval = function (fn, delay) {
                if (!window.requestAnimationFrame && !window.webkitRequestAnimationFrame && !window.mozRequestAnimationFrame && !window.oRequestAnimationFrame && !window.msRequestAnimationFrame) return window.setInterval(fn, delay);
                var start = new Date().getTime(),
                    handle = new Object();

                function loop() {
                    var current = new Date().getTime(),
                        delta = current - start;
                    if (delta >= delay) {
                        fn.call();
                        start = new Date().getTime();
                    }
                    handle.value = requestAnimFrame(loop);
                }
                handle.value = requestAnimFrame(loop);
                return handle;
            };

            window.clearRequestInterval = function (handle) {
                window.cancelAnimationFrame ? window.cancelAnimationFrame(handle.value) : window.webkitCancelRequestAnimationFrame ? window.webkitCancelRequestAnimationFrame(handle.value) : window.mozCancelRequestAnimationFrame ? window.mozCancelRequestAnimationFrame(handle.value) : window.oCancelRequestAnimationFrame ? window.oCancelRequestAnimationFrame(handle.value) : window.msCancelRequestAnimationFrame ? msCancelRequestAnimationFrame(handle.value) : clearInterval(handle);
            };

            //====================== http://stackoverflow.com/a/11381730/989439

            function mobilecheck() {
                var check = false;
                (function (a) {
                    if (/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
                })(navigator.userAgent || navigator.vendor || window.opera);
                return check;
            }

            var clickEvent = mobilecheck() ? "touchstart" : "click";

            $.each(s.$nodes, function (i) {
                var $this = $(this);
                $this.find("a").on(clickEvent, function (e) {
                    e.preventDefault();
                    clearCarousel(i);
                    smallCarousel.getRotate($this, i);
                });
            });

            $.each(s.$numberItems, function (i) {
                var $this = $(this);
                $this.find("a").on(clickEvent, function (e) {
                    e.preventDefault();
                    clearCarousel(i);
                    smallCarousel.getRotate(s.$nodes.eq(i), i);
                });
            });

            var animloop = function (currentSlide) {

                if (s.$isAuto) {
                    if (s.$current === s.$_nodes - 1) {
                        s.$current = 0;
                    } else {
                        s.$current++;
                    }
                } else {
                    s.$current = currentSlide;
                }
                smallCarousel.getRotate(s.$nodes.eq(s.$current), s.$current);
            };

            var clearCarousel = function (x) {
                clearRequestInterval(autoCarousel);
                s.$isAuto = false;
                animloop(x);
            };

            var autoCarousel = requestInterval(animloop, s.$acAuto);

            //-------------------------------------------------- Avoid :hover

            if (!("ontouchstart" in document.documentElement)) {
                document.documentElement.className += " no-touch";
            }
        },

        getRotate: function (obj, pos) {
            var angle = 360 / s.$_nodes,
                rot = 720,
                // Starting angle of the first item
            wC = s.$container.width();

            for (var i = 0; i < s.$_nodes; i++) {
                var dist = Math.round(rot + angle * i + -angle * pos); // nothing clever, but it works!
                s.$nodes.eq(i).css({
                    transform: "rotate(" + dist + "deg) translate(" + wC / 2 + "px) rotate(-" + dist + "deg)"
                });
            }
            s.$nodes.find("a").not(obj).removeClass("activedoit");
            obj.find("a").addClass("activedoit");
            s.$numberItems.find("a").not(s.$numberItems.eq(pos)).removeClass("activedoit");
            s.$numberItems.eq(pos).find("a").not().addClass("activedoit");
        }
    };

    $('.circle-container li').click(function () {
        var tab_id = $(this).attr('data-tab');
        var node = $(".tab-content-container > .tab-content").length;
        var tabactive = $("#" + tab_id);
        var dist = 2000;
        $('.circle-container li').removeClass('current');
        $('.circle-container li').removeClass('current_over');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        tabactive.addClass('current');
        $('.circle-container li.current').next().addClass("current_over");
        $('.circle-container li.current').prev().addClass("current_over");
    });

    $(document).ready(function () {
        smallCarousel.init();
    });
}

},{}]},{},[1]);
