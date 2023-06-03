$(document).ready(function () {


    // TOGGLE CHECKED / UNCHECKED

    $("input[type=checkbox]").change(function() {

        if( $(this).is(":checked") ) { // CHECKED
            
            $(this).parent().removeClass('unchecked').addClass('checked')

        } else { // UNCHECKED

            $(this).parent().removeClass('checked').addClass('unchecked')
        }

    });

    // ------------------------------- FUNCTIONS [ START ] -------------------------------

    // ------------------------------- FUNCTIONS [ END ] -------------------------------





    // FORCE RELOAD WHEN YOU GO BACK TO PREVIOUS PAGE

    window.addEventListener("pageshow", function (event) {
        var historyTraversal = event.persisted ||
            (typeof window.performance != "undefined" &&
                window.performance.navigation.type === 2);
        if (historyTraversal) {
            // Handle page restore.
            window.location.reload();
        }
    });


    // DEFAULT BTN ACTIONS ---------------- [ START ]

    //  GO BACK

    $('.back_btn').click(function (e) {
        e.preventDefault();
        window.history.back();
    });

    // DEFAULT BTN ACTIONS ---------------- [ END ]



    // TIMEOUT ----------------- [ START ]

    // HIDE FLASH MESSAGE AFTER X SECONDS


    // runs 1 time

    setTimeout(function() {
        $('#flash-msg').fadeOut('fast');
    }, 3000); // <-- time in milliseconds ( 3 seconds )


    // runs in loop

    // changes image slider every 5 seconds

    var intervalId = window.setInterval(function(){
        $('.next').click();
      }, 5000);

    
    // set nav link active

    $('.nav-link').each(function (index, element) {
        if ($(this).data('url') == window.location.pathname) {
            $(this).addClass('nav-link-active').removeClass('hover-underline-animation');
        }
    });

    // $('.nav-link').click(function (e) { 
    //     e.preventDefault();
    //     if ($(this).data('url') == window.location.pathname) {
    //         $(this).addClass('nav-link-active').removeClass('hover-underline-animation');
    //     }
    // });


    // REFRESH CLOCK

    // setTimeout(function() {
    //     document.getElementById('clock').innerHTML = formatAMPM(new Date)
    // }, 60000); // <-- time in milliseconds ( 1 minute )

    // TIMEOUT ----------------- [ END ]

});