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

    //slider changing countries names, capitals
    var sliderChanger = function() {
        slides.eq(-1).addClass('active name');
        currentSlide++;

        slides.removeClass('active').eq(currentSlide).addClass('active');
        countryName = $('p.active');
        if (currentSlide > slides.length - 1) {
            currentSlide = 0;
            result.text("Twój wynik to " + counter + "/14");
            bravoDiv.css("display", "none");
            $('button.newgame').css("display", "block");
        }
    };

    sliderChanger();
    var showCountryName = function() {
        var countryMap = $(this).attr("class");
        //showNow.text(country);
        // console.log(countryMap);
        // console.log(countryName);

        if (countryName.hasClass(countryMap)) {
            counter++;
            // console.log("takie same!");
            result.text("Punkty " + counter);
            new Audio('sounds/bravo.mp3').play();
            bravoDiv.fadeIn(500).fadeOut(1500);
            bravo.css('color', '');
            bravo.text('Brawo!');
            sliderChanger();

        } else {
            result.text("Punkty " + counter);
            new Audio('sounds/error ara.mp3').play();
            bravoDiv.fadeIn(500).fadeOut(1500);
            bravo.css('color', '#b84e70');
            bravo.text('Źle!');
            sliderChanger();
        }
    }

    argentina.on('click', showCountryName);
    bolivia.on('click', showCountryName);
    brazil.on('click', showCountryName);
    colombia.on('click', showCountryName);
    chile.on('click', showCountryName);
    ecuador.on('click', showCountryName);
    falklands.on('click', showCountryName);
    guyana.on('click', showCountryName);
    guianaf.on('click', showCountryName);
    paraguay.on('click', showCountryName);
    peru.on('click', showCountryName);
    suriname.on('click', showCountryName);
    uruguay.on('click', showCountryName);
    venezuela.on('click', showCountryName);

});
