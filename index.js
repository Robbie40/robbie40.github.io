

//Opens vehicle menu
$('#dropdownVehicles').mouseover(function() {
    if(!$('.dropdownContent').is(':visible')) {
        $('#dropdownContVehicles').slideDown();
        $('#dropdownContVehicles').css('display', 'flex');
        $('.dropdownItemsCont').css('opacity', '1');
    }
    else {
        $('#dropdownContVehicles').css('display', 'flex');
        $('#dropdownContEnergy').css('display', 'none');
        $('#dropdownContCharging').css('display', 'none');
        $('#dropdownContDiscover').css('display', 'none');
        $('#dropdownContShop').css('display', 'none');
    }
});

//Opens energy menu
$('#dropdownEnergy').mouseover(function() {
    if(!$('.dropdownContent').is(':visible')) { 
        $('#dropdownContEnergy').slideDown();
        $('#dropdownContEnergy').css('display', 'flex');
        $('.dropdownItemsCont').css('opacity', '1');
    }
    else {
        $('#dropdownContEnergy').css('display', 'flex');
        $('#dropdownContVehicles').css('display', 'none');
        $('#dropdownContCharging').css('display', 'none');
        $('#dropdownContDiscover').css('display', 'none');
        $('#dropdownContShop').css('display', 'none');
    }
});

//Opens charging menu
$('#dropdownCharging').mouseover(function() {
    if(!$('.dropdownContent').is(':visible')) { 
        $('#dropdownContCharging').slideDown();
        $('#dropdownContCharging').css('display', 'flex');
        $('.dropdownItemsCont').css('opacity', '1');
    }
    else {
        $('#dropdownContCharging').css('display', 'flex');
        $('#dropdownContVehicles').css('display', 'none');
        $('#dropdownContEnergy').css('display', 'none');
        $('#dropdownContDiscover').css('display', 'none');
        $('#dropdownContShop').css('display', 'none');
    }
});

//Opens discover menu
$('#dropdownDiscover').mouseover(function() {
    if(!$('.dropdownContent').is(':visible')) { 
        $('#dropdownContDiscover').slideDown();
        $('#dropdownContDiscover').css('display', 'flex');
        $('.dropdownItemsCont').css('opacity', '1');
    }
    else {
        $('#dropdownContDiscover').css('display', 'flex');
        $('#dropdownContVehicles').css('display', 'none');
        $('#dropdownContCharging').css('display', 'none');
        $('#dropdownContEnergy').css('display', 'none');
        $('#dropdownContShop').css('display', 'none');
    }
});

//Opens shop menu
$('#dropdownShop').mouseover(function() {
    if(!$('.dropdownContent').is(':visible')) { 
        $('#dropdownContShop').slideDown();
        $('#dropdownContShop').css('display', 'flex');
        $('.dropdownItemsCont').css('opacity', '1');
    }
    else {
        $('#dropdownContShop').css('display', 'flex');
        $('#dropdownContVehicles').css('display', 'none');
        $('#dropdownContCharging').css('display', 'none');
        $('#dropdownContDiscover').css('display', 'none');
        $('#dropdownContEnergy').css('display', 'none');
    }
});

//Closes dropdown menu
$('.headerandBtns').mouseover(function() {
    $('.dropdownContent').slideUp();
    $('.dropdownItemsCont').css('opacity', '0');
});

//Changes nav bar items color when drop down menu slides down and up

$('#m3ChooseHeaderandBtns').mouseover(function() {
    $('.dropBtn').css('color', 'white');
    $('#logo').css('filter', 'invert(100%)');
    $('#icons').css('filter', 'invert(100%)');
});


$('.m3ChooseInfo').mouseover(function() {
    $('.dropBtn').css('color', 'black');
    $('#logo').css('filter', 'invert(0%)');
    $('#icons').css('filter', 'invert(0%)');
});

/*Causes 'Switch to Performance' to pulsate */

$('#m3ChooseHeaderandBtns p').click(function() {
    $('#m3ChooseHeaderandBtns p').effect('pulsate', {times:5}, 3000);
});


/*Determines whether the user is scrolling up or down and then changes the background image and text*/

var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
       // downscroll code
       $('#m3Choose').css('background-image', 'url(https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-3-Choose-Performance-Desktop-RHD.png)');
       $('#performancePara').html('Switch to Model 3');
       $('#m3ChooseHeaderandBtns h2').html('Performance');
       $('#downArrow').html('&#129105');
   } else {
      // upscroll code
      $('#m3Choose').css('background-image', 'url(https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-3-Choose-Standard-Desktop-RHD.png)');
      $('#performancePara').html('Switch to Performance');
      $('#m3ChooseHeaderandBtns h2').html('Standard and Long Range');
      $('#downArrow').html('&#129107');
   }
   lastScrollTop = st;
});

/*Can also toggle between car modes by using a button*/

$('#m3ChoosePerformanceCont').click(function() {

    if ($('#m3ChooseHeaderandBtns h2').html() === 'Standard and Long Range') {
        $('#m3Choose').css('background-image', 'url(https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-3-Choose-Performance-Desktop-RHD.png)');
        $('#performancePara').html('Switch to Model 3');
        $('#m3ChooseHeaderandBtns h2').html('Performance');
        $('#downArrow').html('&#129105');
    }
    else {
        $('#m3Choose').css('background-image', 'url(https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-3-Choose-Standard-Desktop-RHD.png)');
        $('#performancePara').html('Switch to Performance');
        $('#m3ChooseHeaderandBtns h2').html('Standard and Long Range');
        $('#downArrow').html('&#129107');
    }
});