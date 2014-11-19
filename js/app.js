$(document).ready(function(){
	$('button').click('input', function () {
		
		var shoppingItem = $( 'input' ).val();
		
		$('#theList').prepend('<ul class="entry"><li class="remove"></li><li class="item"><p>' + shoppingItem  +'</p></li><li class="cross-off"></li></ul>'); 
			}) 
		});

$(document).ready(function(){

			$(".cross-off").on('click', function() {
				$(this).closest(".entry").find("p").toggleClass("finished");
		}) 

			$(".remove").on('click', function() {
			$(this).closest(".entry").remove();
			});
			

	});


