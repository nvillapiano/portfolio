/* List functions */

// Fade in on page load
function fadeIn() {
    $(document).ready( function() {
        $('body').animate({ 
            scrollTop: "0" 
        }, 10);        
        setTimeout( function() {
            $('body').addClass('in');
            $('body').addClass('no-overflow');
            console.log('loaded');
        }, 20)                
    })
}
// Expand homepage sections
function expandHome() {
    // Click Projects
    $('.projects-trigger').click( function() {
        $('.projects-trigger').toggleClass('expand');
        //
        setTimeout( function() {
            $('.case-studies').toggleClass('show');
            $('.back').toggleClass('show');
            $('body').removeClass('no-overflow');
            $('.circle-wrapper').addClass('cream');
            window.scrollTo(0, 0);
        }, 300)
    })  
    // Click Me
    $('.me-trigger').click( function() {
        $('.projects-trigger').toggleClass('contract fade-out');
        // $('.projects-trigger').toggleClass('fade-out');
        //
        setTimeout( function() {            
            // $('.case-studies').toggleClass('show');
            // $('body').toggleClass('no-overflow');
            $('.me-trigger').toggleClass('fade-out');
            $('.back').toggleClass('show blue');
            window.scrollTo(0, 0);
        }, 300)
    })  
    // Click back
    $('.back').click( function() {
        $('.case-studies').removeClass('show');        
        //
        setTimeout( function() {
            $('.back').removeClass('show');
            $('.back').removeClass('blue'); 
            $('.projects-trigger, .me-trigger').removeClass('expand');
            $('.projects-trigger, .me-trigger').removeClass('fade-out');
            $('.projects-trigger, .me-trigger').removeClass('contract');
            $('body').addClass('no-overflow');  
            $('.circle-wrapper').removeClass('cream');          
        }, 300)
        $('body').animate({ 
            scrollTop: "0" 
        }, 500);
    })          
}
// Nav toggle
function navToggle() {
    $('.circles').click( function() {
        $('.header').toggleClass('show');
    })
}


/* Call functions */
fadeIn();
expandHome();
navToggle();
