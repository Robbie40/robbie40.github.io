/*------------------------------------------- Navigation Bar -------------------------------------------*/

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

/*------------------------------------------- Model 3 Choose Page -------------------------------------------*/

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

//Causes 'Switch to Performance' to pulsate

$('#m3ChooseHeaderandBtns p').click(function() {
    $('#m3ChooseHeaderandBtns p').effect('pulsate', {times:5}, 3000);
});


//Determines whether the user is scrolling up or down and then changes the background image and text

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

//Can also toggle between car modes by using a button

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

/*------------------------------------------- Model Y Page -------------------------------------------*/

//Displays car information and changes image when each header is clicked. 

$('#head1').click(function() {
    $('#mYInfo p').each(function(i, obj) {
        if ($(this).is(':visible') && $(this).html() != $('#para1').html()) {
            $(this).css('display', 'none');
        }
        else {
            $('#para1').slideDown();
            $('.mYDivCont img').attr('src',"https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-Y-Overview-Carousel-Slide-1-Charging-Desktop-Global.jpg");
        }
    });
    $('#mYInfo h2').each(function(i, obj) {
        if ($(this).html() != $('#head1').html()) {
            $(this).css('color', 'rgb(85, 85, 85)');
        }
        else {
            $(this).css('color', 'white');
        }
    });
});

$('#head2').click(function() {
    $('#mYInfo p').each(function(i, obj) {
        if ($(this).is(':visible') && $(this).html() != $('#para2').html()) {
            $(this).css('display', 'none');
        }
        else {
            $('#para2').slideDown();
            $('.mYDivCont img').attr('src',"https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-Y-Overview-Carousel-Slide-2-Performance-Desktop-RHD.jpg");
        }
    });
    $('#mYInfo h2').each(function(i, obj) {
        if ($(this).html() != $('#head2').html()) {
            $(this).css('color', 'rgb(85, 85, 85)');
        }
        else {
            $(this).css('color', 'white');
        }
    });
});

$('#head3').click(function() {
    $('#mYInfo p').each(function(i, obj) {
        if ($(this).is(':visible') && $(this).html() != $('#para3').html()) {
            $(this).css('display', 'none');
        }
        else {
            $('#para3').slideDown();
            $('.mYDivCont img').attr('src',"https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-Y-Overview-Carousel-Slide-3-Safety-Desktop.jpg");
        }
    });
    $('#mYInfo h2').each(function(i, obj) {
        if ($(this).html() != $('#head3').html()) {
            $(this).css('color', 'rgb(85, 85, 85)');
        }
        else {
            $(this).css('color', 'white');
        }
    });
});

$('#head4').click(function() {
    $('#mYInfo p').each(function(i, obj) {
        if ($(this).is(':visible') && $(this).html() != $('#para4').html()) {
            $(this).css('display', 'none');
        }
        else {
            $('#para4').slideDown();
            $('.mYDivCont img').attr('src',"https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-Y-Overview-Carousel-Slide-4-Utility-Desktop.jpg");
        }
    });
    $('#mYInfo h2').each(function(i, obj) {
        if ($(this).html() != $('#head4').html()) {
            $(this).css('color', 'rgb(85, 85, 85)');
        }
        else {
            $(this).css('color', 'white');
        }
    });
});

$('#head5').click(function() {
    $('#mYInfo p').each(function(i, obj) {
        if ($(this).is(':visible') && $(this).html() != $('#para5').html()) {
            $(this).css('display', 'none');
        }
        else {
            $('#para5').slideDown();
            $('.mYDivCont img').attr('src',"https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-Y-Overview-Carousel-Slide-5-Phone-Desktop.jpg");
        }
    });
    $('#mYInfo h2').each(function(i, obj) {
        if ($(this).html() != $('#head5').html()) {
            $(this).css('color', 'rgb(85, 85, 85)');
        }
        else {
            $(this).css('color', 'white');
        }
    });
});

//Displays information on charging when the small gray circular buttons are clicked

$('#mYChargeBtn1').click(function() {
    $('#mYChargeHeader').html('While You Sleep');
    $('#mYChargePara').html('Charge at home with Wall Connector, our most convenient way to recharge.');
    $('#modelYSection5 img').attr('src',"https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-Y-Charging-Carousel-Slide-1-Sleep-Desktop-EMEA.jpg");
    $('#mYChargeBtn1').css('background-color', 'black');
    $('#mYChargeBtn2').css('background-color', 'lightgray');
    $('#mYChargeBtn3').css('background-color', 'lightgray');
});

$('#mYChargeBtn2').click(function() {
    $('#mYChargeHeader').html('During the Day');
    $('#mYChargePara').html('Plug Mobile Connector into a standard outlet wherever you park.');
    $('#modelYSection5 img').attr('src',"https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-Y-Charging-Carousel-Slide-2-Daily-Desktop-EMEA.jpg");
    $('#mYChargeBtn1').css('background-color', 'black');
    $('#mYChargeBtn2').css('background-color', 'black');
    $('#mYChargeBtn1').css('background-color', 'lightgray');
    $('#mYChargeBtn3').css('background-color', 'lightgray');
});

$('#mYChargeBtn3').click(function() {
    $('#mYChargeHeader').html('On Road Trips');
    $('#mYChargePara').html('Add up to 150 miles of range in just 15 minutes* at a Supercharger along your route or recharge at your destination.');
    $('#modelYSection5 img').attr('src',"https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-Y-Charging-Carousel-Slide-3-RoadTrip-Desktop-EMEA.jpg");
    $('#mYChargeBtn3').css('background-color', 'black');
    $('#mYChargeBtn1').css('background-color', 'lightgray');
    $('#mYChargeBtn2').css('background-color', 'lightgray');
});


//Changes color of each trip info from gray to white when clicked

$('#mYTrip1').click(function() {
    $('#mYTrips div').each(function(i, obj) {
        if ($(this).html() != $('#mYTrip1').html()) {
            $(this).css('color', 'rgb(85, 85, 85)');
            $(this).css('border-top', 'solid 2px rgb(85, 85, 85)');
        }
        else {
            $(this).css('color', 'white');
            $(this).css('border-top', 'solid 5px white');
            $('#tripImg').attr('src',"images/mYTripImage1.JPG");
        }
    });
});

$('#mYTrip2').click(function() {
    $('#mYTrips div').each(function(i, obj) {
        if ($(this).html() != $('#mYTrip2').html()) {
            $(this).css('color', 'rgb(85, 85, 85)');
            $(this).css('border-top', 'solid 2px rgb(85, 85, 85)');
        }
        else {
            $(this).css('color', 'white');
            $(this).css('border-top', 'solid 5px white');
            $('#tripImg').attr('src',"images/mYTripImage2.JPG");
        }
    });
});

$('#mYTrip3').click(function() {
    $('#mYTrips div').each(function(i, obj) {
        if ($(this).html() != $('#mYTrip3').html()) {
            $(this).css('color', 'rgb(85, 85, 85)');
            $(this).css('border-top', 'solid 2px rgb(85, 85, 85)');
        }
        else {
            $(this).css('color', 'white');
            $(this).css('border-top', 'solid 5px white');
            $('#tripImg').attr('src',"images/mYTripImage3.JPG");
        }
    });
});

$('#mYTrip4').click(function() {
    $('#mYTrips div').each(function(i, obj) {
        if ($(this).html() != $('#mYTrip4').html()) {
            $(this).css('color', 'rgb(85, 85, 85)');
            $(this).css('border-top', 'solid 2px rgb(85, 85, 85)');
        }
        else {
            $(this).css('color', 'white');
            $(this).css('border-top', 'solid 5px white');
            $('#tripImg').attr('src',"images/mYTripImage4.JPG");
        }
    });
});

$('#mYTrip5').click(function() {
    $('#mYTrips div').each(function(i, obj) {
        if ($(this).html() != $('#mYTrip5').html()) {
            $(this).css('color', 'rgb(85, 85, 85)');
            $(this).css('border-top', 'solid 2px rgb(85, 85, 85)');
        }
        else {
            $(this).css('color', 'white');
            $(this).css('border-top', 'solid 5px white');
            $('#tripImg').attr('src',"images/mYTripImage5.JPG");
        }
    });
});

