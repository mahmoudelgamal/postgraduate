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
	});
	//start custom choose file
	
//start choose file customize
$('input[type="file"]').wrap('<div class="custom-input-file"></div>');
$('.custom-input-file').prepend('<span>Upload your file here</span>');
$('.custom-input-file').append('<i class="fas fa-upload"></i>')
$('input[type="file"]').change(function(){
	$(this).prev('span').text($(this).val());
})
})