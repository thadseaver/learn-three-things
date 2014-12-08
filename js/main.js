window.onload = function(){
	

	$('#submit').on('click', function(){
		var list = $('.topic').map(function() {
			return $(this).val();
            }).toArray();

		for (i = 0; i < list.length; i++) {
    		window.open('http://google.com/search?q=' + list[i]);
    	}
	});
};