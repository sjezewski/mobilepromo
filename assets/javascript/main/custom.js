x$.ready(function(){
	
	// "Main menu" -> "Menu"
	// Show toolbar with data when item is clicked from dropdown menu  
	x$('.BulkDiscount input').click( function (e) {
		x$('#Outer').attr('mw_class', 'hide');	
		// x$('.modalClose').click( function (e) {
		// 	x$('#Outer').attr('mw_class', 'show');	
		// })
		x$(".modalClose").attr("onclick", "x$('#Outer').attr('mw_class', 'show');")
	})
	
	// x$('.modalClose').click( function (e) {
	// 	x$('#Outer').attr('mw_class', 'show');	
	// })
	
	
});