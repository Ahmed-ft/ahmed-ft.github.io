$(document).ready(function () {
    


    $('a#getProfile').attr({target: '_blank', 
                    href  : '/assets/files/COMPANY_CV.pdf'});

    $('a#getHse').attr({target: '_blank', 
                    href  : '/assets/files/HSE_MANUAL.pdf'});
                    
    $('a#transport-s').attr({target: '_blank', 
                    href  : '/assets/files/TRANSPORT_PROFILE.pdf'});

    $('.exit').click(function (e) { 
        e.preventDefault();
        $(this).parent().css('display', 'none')
    });

    $('.service-board-trigger').click(function (e) { 
        e.preventDefault();
        var id = $(this).attr('id');
        $(`.${id}`).css('display', 'flex')
    });

});