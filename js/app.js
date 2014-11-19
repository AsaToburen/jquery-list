$(document).ready(function(){
	
	$('button').click('input', function () {
		
		var shoppingItem = $( 'input' ).val();
		
		$('#theList').prepend('<ul class="entry"><li class="remove"></li><li class="item"><p>' + shoppingItem  +'</p></li><li class="cross-off"></li></ul>'); 
		}) 
			$(".cross-off").click(function() {
				$(".item").find("p").addClass("finished");
		}) 
			$(".remove").click(".entry", function() {
				$(".entry").hide();
			});
		});
		
	
	


