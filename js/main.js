$(document).ready(function() {
	// init scrollspy
	$('.nav').scrollspy();
	
	// empty the modal when closing
	$('#myModal').on('hidden', function(){
		$(this).find('.modal-body').empty();
		console.log('empty modal');
	});
});
