$(document).ready(function() {
	// init scrollspy
	$('.nav').scrollspy();
	
	// empty the modal when closing
	$('.popup-links').attr('href','');
	$('.popup-links').on('click', function(e){
		var remote = $(this).data('href');
		
		$.ajax({
			url: remote,
			context: document.body,
			success: function(){
				//when Successfully executed
				$('#myModal .modal-body').hmtl(data);
				//$('#myModal').modal('show');
				console.log('load modal content');				
			},
			error: function(){
				//When Error Fires
				console.log('error ', error);
			}
		});
	});
});
