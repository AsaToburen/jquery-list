$(document).ready(function(){

$('input').keydown(function(event){    
    if(event.keyCode==13){
    	$('button').trigger('click');
    }
});

	$('button').click('input', function () {
		
		var shoppingItem = $( 'input' ).val();
		if( shoppingItem !== "") {
		$('#theList').append('<ul class="entry"><li class="remove"></li><li class="item"><p>' + shoppingItem  +'</p></li><li class="cross-off"></li></ul>'); 
			$( 'input' ).val('');
		}
			});
			})

			$("#theList").on('click','.cross-off', function() {
				$(this).closest(".entry").find("p").toggleClass("finished");
		}) 

			$("#theList").on('click', '.remove', function() {
			$(this).closest(".entry").remove();
			});
