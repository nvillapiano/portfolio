/* List functions */

// Fade in on page load
function fadeIn() {
    $(document).ready( function() {
        $('body').addClass('in');
        $('body').addClass('no-overflow');
        $('body').animate({ 
            scrollTop: "0" 
        }, 10);        
        console.log('loaded');
    })
}
// Expand homepage sections
function expandHome() {
    $('.projects-trigger').click( function() {
        $('.projects-trigger').toggleClass('expand');
        //
        setTimeout( function() {
            $('.case-studies').toggleClass('show');
            $('body').toggleClass('no-overflow');
            $('.circle-wrapper').toggleClass('cream');
            window.scrollTo(0, 0);
        }, 300)
    })  
    $('.me-trigger').click( function() {
        $('.me-trigger').toggleClass('expand');
        //
        setTimeout( function() {
            $('.case-studies').toggleClass('show');
            $('body').toggleClass('no-overflow');
            $('.circle-wrapper').toggleClass('cream');
            window.scrollTo(0, 0);
        }, 300)
    })  
    $('.back').click( function() {
        $('.case-studies').removeClass('show');        
        //
        setTimeout( function() {
            $('.projects-trigger, .me-trigger').removeClass('expand');
            $('body').toggleClass('no-overflow');  
            $('.circle-wrapper').toggleClass('cream');          
        }, 300)
        $('body').animate({ 
            scrollTop: "0" 
        }, 500);
    })          
}

/* Call functions */
fadeIn();
expandHome();
