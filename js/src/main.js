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
function projectsTrigger() { 
    $('.projects-trigger').toggleClass('expand');
    //
    setTimeout( function() {
        $('.case-studies').toggleClass('show');
        $('.back').toggleClass('show');
        $('body').removeClass('no-overflow');
        $('.circle-wrapper').addClass('cream');
        $('.back').addClass('show');
        window.scrollTo(0, 0);
    }, 300)        
    console.log('projectsTrigger');
}
//
function meTrigger() {   
    $('.projects-trigger, .me-trigger').toggleClass('contract fade-out');
    //
    setTimeout( function() {            
        $('.me').addClass('show');
        $('body').toggleClass('no-overflow');            
        $('.back').toggleClass('show blue');
        window.scrollTo(0, 0);
    }, 300)    
    console.log('meTrigger');
}
//
function backTrigger() {
    $('.case-studies').removeClass('show'); 
    $('.me').removeClass('show');       
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
}
//
function expandHome() {
    // Click Projects
    $('.projects-trigger').click( function() {
        projectsTrigger();
    })     
    // Click Me
    $('.me-trigger').click( function() {
        meTrigger();
    })          
    // Click back
    $('.back').click( function() {
        backTrigger();   
    })              
}
// Nav toggle
function navToggle() {
    $('.circles, .nav').click( function() {
        $('.header').toggleClass('show');                
        $('.back').removeClass('blue');
        // if ( $('.back').hasClass('show') ) {
        //     $('.back').removeClass('show');
        // }
        if ( $('.header').hasClass('show') && $('.case-studies').hasClass('show') ) {
            $('.back').toggleClass('show');
            console.log('nav show / case studies show')
        }
    })
    $('a[name="home"]').click( function() {
        setTimeout( function() {
            $('.case-studies, .me').removeClass('show');
            $('.projects-trigger, .me-trigger').removeClass('expand contract fade-out');
            // $('.me-trigger').removeClass('contract fade-out');
            $('.header').removeClass('show');        
            $('.back').removeClass('show');
            $('.back').removeClass('blue');  
            $('.circle-wrapper').removeClass('cream');   
        }, 10)     
    })
    $('a[name="projects"]').click( function() {
        $('.me').removeClass('show');
        setTimeout( function() {
            projectsTrigger();
        }, 10)        
    })
    $('a[name="me"]').click( function() {
        $('.case-studies').removeClass('show');
        setTimeout( function() {
            meTrigger();
        }, 10)  
    })    
}


/* Call functions */
fadeIn();
expandHome();
navToggle();
