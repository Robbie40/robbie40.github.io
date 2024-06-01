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