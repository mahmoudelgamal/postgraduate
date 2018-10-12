$(document).ready( function () {
	$('#applyForPostgeaduate').click( function () {
		$('body').css(
			{
				'position' : 'relative',
				'top' : '-800px'
			}
		);
		$('.log-in').hide(300);
		$('.sign-up').css(
			{
				'display':'block',
				'position' :'relative',
				'top' : '800px'
			
			})
	})
	
	$(".back-logIn").click(function(){
		$('.sign-up').css(
			{
				'display':'block',
				'position' :'relative',
				'top' : '-800px'
			
			})
		$('body').css(
			{
				'position' : 'relative',
				'top' : '0px'
			}
		);
		$('.sign-up').hide(300);
		$('.log-in').fadeIn(500);
	})
})