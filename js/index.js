function truncateText(element, maxLength) {
	var truncated = $(element).text();

	// truncate text if it exceeds the max length and append "..." to end
	if (truncated.length > maxLength) {
	
		/* try not to truncate mid-word, check up to 20 extra letters
			at maxlength character to let the current word been
			realised in full */
		for (var i = 0; i < 20; i++) {
			var currentChar = truncated.charAt(maxLength + i);
			if (currentChar == " ") {
				maxLength = maxLength + i;
				break;
			}
		}
		
		/* if truncate happens after word at the end of sentence,
			cut the period from the word so it doesn't interfere
			with our "..." */
		if (truncated.charAt(maxLength - 1) == ".") {
			truncated = truncated.substr(0, maxLength - 1) + ' . . .';
		} else { 
			truncated = truncated.substr(0, maxLength) + ' . . .';
		}
	}
	return truncated;
}

function addPaginationButtons() {
	var MAX_SEGMENTS = 3;
	var NO_OF_SEGMENTS = $('.segment').length;
	if (NO_OF_SEGMENTS > MAX_SEGMENTS) {
		$( "<div id='pg-btns'></div>").appendTo($('.float-fill'));
	}
	for (var i = 1; i <= NO_OF_SEGMENTS; i++) {
		$( "<div class='pg-btn'>" + i + "</div>" ).appendTo($('#pg-btns'));
	}
}

	// truncate any preview text
var previewElements = $('.preview');
for (index = 0; index < previewElements.length; ++index) {
	var currentElement = previewElements[index];
	$(currentElement).text(truncateText(currentElement, 250));
}

addPaginationButtons();

