$(document).ready(function() {
	// init scrollspy
	$('.nav').scrollspy();
	
	// empty the modal when closing
	$('.popup-links').attr('href','');
	$('.popup-links').on('click', function(e){
		var remote = $(this).data('href');
		$('#myModal .modal-body').load(remote, function(response, status, xhr){
			if (status == "error") {
				var msg = "Sorry but there was an error: ";
				alert(msg + xhr.status + " " + xhr.statusText + ". Remote = " + remote);
			}
			else {
				//$('#myModal').modal('show');
				console.log('load modal content');
			}
		});
	});
});
