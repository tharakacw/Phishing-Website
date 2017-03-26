
function init() {
    $('#txt_v_userid').focus();
}

function focusUserId() {

    $('#txt_v_userid').focus();
}

function focusPassword(userID) {
    $('#txt_v_password').focus()
    $('#txt_v_userid').val(userID);
}

function formValidate() {

    var name = $('#txt_v_userid').val();
    var password = $('#txt_v_password').val();

    if (name == "") {
        return false;
    }

    if (name != "") {
        var iChars = "!@#$%^&*()+=-[]\\\';,./{}|\":<>?";
        for (var i = 0; i < name.length; i++) {
            if (iChars.indexOf(name.charAt(i)) != -1) {
                return false;
            }
        }

    }

    if (password == "") {
        return false;
    }

    return true;
}

/*
 
 function slideSwitch() {
 var $active = $('#slideshow IMG.active');
 
 if ( $active.length == 0 ) $active = $('#slideshow IMG:last');
 
 // use this to pull the images in the order they appear in the markup
 var $next =  $active.next().length ? $active.next()
 : $('#slideshow IMG:first');
 
 // uncomment the 3 lines below to pull the images in random order
 
 // var $sibs  = $active.siblings();
 // var rndNum = Math.floor(Math.random() * $sibs.length );
 // var $next  = $( $sibs[ rndNum ] );
 
 
 $active.addClass('last-active');
 
 $next.css({
 opacity: 0.0
 })
 .addClass('active')
 .animate({
 opacity: 1.0
 }, 1000, function() {
 $active.removeClass('active last-active');
 });
 }
 
 $(function() {
 setInterval( "slideSwitch()", 8000 );
 });
 
 */
$('#bttClear').click(function() {
    $('#txt_v_userid').val('');
    $('#txt_v_password').val('');
    $('#txt_v_userid').focus();
    $('#userid1').css('border-color', '#FFD606');
    $('#password1').css('border-color', '#ccc');
});

//$('#bttSignin').click(function(){
//    var userid=$('#txt_v_userid').val();	
//    var password=$('#txt_v_password').val();	
//		
//    $.post('/loginValidate',{
//        userid:userid,
//        password:password
//    },function(data){
//        $('#login_feedback').html(data+"-"+userid+"-"+password);
//    });
//});



$('#userid1').click(function() {

    $(this).css('border-color', '#FFD606');
    $('#password1').css('border-color', '#ccc');

});

$('#password1').click(function() {

    $(this).css('border-color', '#FFD606');
    $('#userid1').css('border-color', '#ccc');


});


function move_div() {

    var window_width = $(window).width();
    var window_height = $(window).height();

    var div_width = $('#font_download').width();
    var div_height = $('#font_download').height();


    var middle_width = (window_width / 2) - (div_width / 2);
    var middle_height = (window_height / 2) - (div_height / 2);

    $('#font_download').css('top', middle_height).css('left', middle_width);
}

move_div();

$(window).resize(function() {

    move_div();
});


function move_div1() {

    var window_width = $(window).width();
    var window_height = $(window).height();

    var div_width = $('.service_desc_container').width();
    var div_height = $('.service_desc_container').height();


    var middle_width = (window_width / 2) - (div_width / 2);
    var middle_height = (window_height / 2) - (div_height / 2);

    $('.service_desc_container').css('top', middle_height).css('left', middle_width);
}

move_div1();

$(window).resize(function() {

    move_div1();
});




$('#font_dwn_link').click(function() {
    $('#font_download').css('display', 'inline');
});

$('#close').click(function() {
    $('#font_download').css('display', 'none');
});

$('#font_download,.service_desc_container').draggable({
    containment: 'document',
    tolerance: 'pointer'
});



$('.sr').click(function() {

    var flag = $(this).attr('flag');
    if (flag == '1')
    {
        $('.service_text').html('&raquo;&nbsp;Own Account Transfer');
        $('.service_desc').html('Transfer funds from own foreign currency (NRFC) to local (LKR) or local (LKR) to local (LKR) accounts in one single step with hassle free.');
    }

    else if (flag == '2')
    {
        $('.service_text').html('&raquo;&nbsp;Third Party Transfer');
        $('.service_desc').html('With the new version of BOC E Bank, transfer funds from your foreign currency* (NRFC) to registered other bank accounts totally free of charge.<br/>\n\
                          <ul class="service_list_right">\n\
                               <li class="sr">NRFC to BOC local (LKR) accounts</li>\n\
                               <li class="sr">BOC Local (LKR) to BOC local (LKR) accounts</li>\n\
                               <li class="sr">Local (LKR) to other bank local (LKR) accounts</li></ul>');
    }


    else if (flag == '3')
    {
        $('.service_text').html('&raquo;&nbsp;BOC Credit Card Settlement');
        $('.service_desc').html('');

    }

    else if (flag == '4')
    {
        $('.service_text').html('&raquo;&nbsp;Utility Bill Payments');
        $('.service_desc').html('No more queues for paying your bills with BOC E Banking facility. Start paying your bills and get them updated instantly with no commission charged.<br/>\n\
                          <ul class="service_list_right">\n\
                               <li class="sr">Airtel pre/postpaid bill payment facility</li>\n\
                               <li class="sr">Mobitel pre/postpaid bill payment facility</li>\n\
                               <li class="sr">Etisalat pre/postpaid bill payment facility</li>\n\
                               <li class="sr">Dialog mobile pre/postpaid bill payment facility</li>\n\
                               <li class="sr">Dialog broadband pre/postpaid bill payment facility</li>\n\
                               <li class="sr">Dialog Television bill payment facility</li>\n\
                               <li class="sr">Dialog CDMA post-paid bills payment facility</li>\n\
                               <li class="sr">Lanka Bell Post-paid package bill payment facility</li>\n\
                               <li class="sr">Sri Lanka Telecom phone bill payment facility</li>\n\
                               <li class="sr">Ceylon Electricity Board bill payment facility</li>\n\
                               <li class="sr">National Water Supply & Drainage Board bill payment facility</li>\n\
                               <li class="sr">Union Assurance premium payment facility</li>\n\
                               <li class="sr">AIA Insurance premium payment facility</li>\n\
                               </ul>');

    }

    else if (flag == '5')
    {
        $('.service_text').html('&raquo;&nbsp;ETF Payments');
        $('.service_desc').html('');

    }

    else if (flag == '6')
    {
        $('.service_text').html('&raquo;&nbsp;Customs Payments');
        $('.service_desc').html('');

    }

    else if (flag == '7')
    {
        $('.service_text').html('&raquo;&nbsp;Union Assurance Premiums');
        $('.service_desc').html('');

    }

    else if (flag == '8')
    {
        $('.service_text').html('&raquo;&nbsp;Aviva NDB Premiums');
        $('.service_desc').html('');

    }

    else if (flag == '9')
    {
        $('.service_text').html('&raquo;&nbsp;Balance Inquiry');
        $('.service_desc').html('Check your balance with enhanced facilities such as current, available, over Draft limit, hold, float and available for utilization within seconds for all.<br/>\n\
                          <ul class="service_list_right">\n\
                               <li class="sr">Current Accounts</li>\n\
                               <li class="sr">Savings Accounts</li>\n\
                               <li class="sr">Fixed Deposit Accounts</li>\n\
                               <li class="sr">Loan Accounts</li>\n\
                               <li class="sr">Credit Card Accounts</li></ul>');

    }

    else if (flag == '10')
    {
        $('.service_text').html('&raquo;&nbsp;Deposits and Advances');
        $('.service_desc').html('Check your sorted deposits and advances with further filtering which is available for printing and downloading.');

    }

    else if (flag == '11')
    {
        $('.service_text').html('&raquo;&nbsp;Today’s and Past Transactions Inquiry');
        $('.service_desc').html('With advanced filtering options BOC E Banking facility is now available for checking and downloading transaction history with transaction to transaction balance.');

    }

    else if (flag == '12')
    {
        $('.service_text').html('&raquo;&nbsp;Past Transactions');
        $('.service_desc').html('');

    }

    else if (flag == '13')
    {
        $('.service_text').html('&raquo;&nbsp;Cheque Satus');
        $('.service_desc').html('');

    }

    else if (flag == '14')
    {
        $('.service_text').html('&raquo;&nbsp;Message to Bank');
        $('.service_desc').html('Your branch is in the reach of your hands now. Contact the branch though a brief message and get connected.');

    }

    else if (flag == '15')
    {
        $('.service_text').html('&raquo;&nbsp;Profile Update');
        $('.service_desc').html('Update your profile with your details and change your challenge answers according to your wish anytime, anywhere');

    }

    else if (flag == '16')
    {


        $('.service_text').html('&raquo;&nbsp;Exchange Rates');
        $('.service_desc').html('Check exchange rates with regular updates with all buying, selling and TT withdrawal rates.');

    }
    $('.service_desc_container').fadeIn(1000);

});

$('.close_link').click(function() {
    $('.service_desc_container').fadeOut(1000);
});