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
			success: function(data){
				//when Successfully executed
				$('#myModal .modal-body').hmtl(data);
				//$('#myModal').modal('show');
				console.log('load modal content');				
			},
			error: function(jqXHR, textStatus, errorThrown){
				//When Error Fires
				console.log('error ', jqXHR, ' ', textStatus, ' ', errorThrown);
			}
		});
		return false;
	});
});
