
$(function(){
	var winH = $(window).height(),
		upperH = $('.upper-bar').innerHeight(),
		navH = $('.navbar').innerHeight();
		
	$('.slider, .carousel-item').height(winH - ( upperH + navH ));

	// ------------------------------- "" "" --------------------------------------------------

	$('.featuredWork ul li').on('click', function () {
		$(this).addClass('active').siblings().removeClass('active');

		if ($(this).data('class') === 'all') {
			$('.shaffle .col-md').css('opacity', 1);
		}
		else {$('.shaffle .col-md').css('opacity', '.09');
			  $($(this).data('class')).parent().css('opacity', 1)
			}
	});
});


// start features

$(window).scroll(function(){
    if($(window).scrollTop() <= 10000){
      $('.f1').addClass('animate__animated animate__fadeInLeft');
    } else {
      $('.f1').removeClass(' animate__animated animate__fadeInLeft');
    }
});

$(window).scroll(function(){
    if($(window).scrollTop() <= 10000){
      $('.f2').addClass('animate__animated animate__fadeInLeft');
    } else {
      $('.f2').removeClass(' animate__animated animate__fadeInLeft');
    }
});
$(window).scroll(function(){
    if($(window).scrollTop() <= 10000){
      $('.f3').addClass('animate__animated animate__fadeInLeft');
    } else {
      $('.f3').removeClass(' animate__animated animate__fadeInLeft');
    }
});
$(window).scroll(function(){
    if($(window).scrollTop() <= 10000){
      $('.f4').addClass('animate__animated animate__fadeInLeft');
    } else {
      $('.f4').removeClass(' animate__animated animate__fadeInLeft');
    }
});
// End features

// start latestPost--------------------
$(window).scroll(function(){
    if($(window).scrollTop() >=2700){
      $('.latest1').addClass('visible animate__animated animate__fadeInLeft');
    }
    //  else {
    //   $('.latest1').removeClass('visible animate__animated animate__fadeInLeft');
    // }
});$(window).scroll(function(){
    if($(window).scrollTop() >=2700){
      $('.latest2').addClass('visible animate__animated animate__fadeInLeft');
    } 
    // else {
    //   $('.latest2').removeClass('visible animate__animated animate__fadeInUp');
    // }
});$(window).scroll(function(){
    if($(window).scrollTop() >=2700){
      $('.latest3').addClass('visible animate__animated animate__fadeInLeft');
    } 
    // else {
    //   $('.latest3').removeClass('visible animate__animated animate__fadeInRight');
    // }
});
// End latestPost----------------------


// Start counter number .................

$('.counter').counterUp({
    delay: 10,
    time: 1000
});

// End counter number .................
