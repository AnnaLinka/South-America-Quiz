$(function() {

    var argentina = $('.argentina');
    var bolivia = $('.bolivia');
    var brazil = $('.brazil');
    var colombia = $('.colombia');
    var chile = $('.chile');
    var ecuador = $('.ecuador');
    var falklands = $('.falklands');
    var guyana = $('.guyana');
    var guianaf = $('.guianaf');
    var paraguay = $('.paraguay');
    var peru = $('.peru');
    var suriname = $('.suriname');
    var uruguay = $('.uruguay');
    var venezuela = $('.venezuela');

    var showNow = $('div.instruction').find('p.answer');
    var countryMap = "";
    var countryName = $('#textSlider p:first-of-type').attr("class");
    var result = $('span.points');
    var counter = 0;
    var button = $('button');
    var bravoDiv = $('div.bravo')
    var bravo = $('p.bravo');
    var slides = $('#textSlider').children();
    var currentSlide = 0;

    //Coloring each country on mouse over
    var colorMeOver = function() {
        $(this).find('path').css("fill", "#fbdd62");
        $(this).on('mouseout', function() {
            $(this).find('path').css("fill", "#81B84D");
        });
    };

    brazil.on('mouseover', colorMeOver);
    argentina.on('mouseover', colorMeOver);
    bolivia.on('mouseover', colorMeOver);
    brazil.on('mouseover', colorMeOver);
    colombia.on('mouseover', colorMeOver);
    chile.on('mouseover', colorMeOver);
    ecuador.on('mouseover', colorMeOver);
    falklands.on('mouseover', colorMeOver);
    guyana.on('mouseover', colorMeOver);
    guianaf.on('mouseover', colorMeOver);
    paraguay.on('mouseover', colorMeOver);
    peru.on('mouseover', colorMeOver);
    suriname.on('mouseover', colorMeOver);
    uruguay.on('mouseover', colorMeOver);
    venezuela.on('mouseover', colorMeOver);

    //Slider with flags
    var slidesFlags = $('#slider_flags .flags_container').children();
    var all_slides = slidesFlags.length;
    var slide_width = $('.slide').width();
    var current_slideFlag = 0;
    var flags = $('#slider_flags .flags_container');

    var flagsW = flags.width(slide_width * all_slides);

    var flagChanger = function() {
        slidesFlags.eq(0).addClass('active');
        current_slideFlag++;
        flags.animate({
            left: '-=' + slide_width
        }, 100);

        slidesFlags.removeClass('active').eq(current_slideFlag).addClass('active');
        flagName = flags.find('div.active');

        if (current_slideFlag > slidesFlags.length - 1) {

            result.text("Twój wynik to " + counter + "/13");
            bravoDiv.css("display", "none");
            $('button.newgame').css("display", "block");
            flags.css('left', +'flagsW');
        }
    };

    flagChanger();
    var checkName = function() {
        var countryMap = $(this).attr("class");
        // console.log(countryMap);
        // console.log(flagName);

        if (flagName.hasClass(countryMap)) {
            counter++;
            // console.log("takie same!");
            result.text("Wynik: " + counter + "/13");
            new Audio('sounds/bravo.mp3').play();
            bravoDiv.fadeIn(500).fadeOut(1500);
            bravo.css('color', '');
            bravo.text('Brawo!');
            flagChanger();

        } else {
            result.text("Wynik: " + counter + "/13");
            new Audio('sounds/error ara.mp3').play();
            bravoDiv.fadeIn(500).fadeOut(1500);
            bravo.css('color', '#b84e70');
            bravo.text('Źle!');
            flagChanger();
        };
    };

    argentina.on('click', checkName);
    bolivia.on('click', checkName);
    brazil.on('click', checkName);
    colombia.on('click', checkName);
    chile.on('click', checkName);
    ecuador.on('click', checkName);
    falklands.on('click', checkName);
    guyana.on('click', checkName);
    guianaf.on('click', checkName);
    paraguay.on('click', checkName);
    peru.on('click', checkName);
    suriname.on('click', checkName);
    uruguay.on('click', checkName);
    venezuela.on('click', checkName);

});
