var MAX_SEGMENTS = 6;
var NO_OF_SEGMENTS = $('.segment').length;

function showPageContent(startIndex, endIndex) {
	//hide all segments
	$('.segment').hide();
 
	//take a slice of segments in the specified range using the text of the buttons 
		// and show them
	$('.segment').slice(MAX_SEGMENTS * startIndex, MAX_SEGMENTS * endIndex).show();
}

function addPaginationButtons() {
	// add pagination section if over max segments
	if (NO_OF_SEGMENTS > MAX_SEGMENTS) {
		$( "<div id='pg-btns'></div>").appendTo($('.float-fill'));
	}
	
	// add necessary number of page buttons
	for (var i = 1; i <= (Math.ceil(NO_OF_SEGMENTS/MAX_SEGMENTS)); i++) {
		$( "<div class='pg-btn'>" + i + "</div>" ).appendTo($('#pg-btns'));
	}
	
	// show page content for first page and set first button to active initially
	showPageContent(0, 1);
	$('.pg-btn').first().addClass("active-pg");
}

addPaginationButtons();

// event to handle page changes
$('.pg-btn').click(function() { 

	// show page content for current button's range
	showPageContent(($(this).text() - 1), ($(this).text()));
	
	// remove active for all buttons and set current one to active
	$('.pg-btn').removeClass("active-pg");
	$(this).addClass("active-pg");
	
	// scroll back to top of page to see beginning of new page
	$('html,body').scrollTop(0);
 }
); 