var imageID = 0;
var backgroundLocator = "#bg-container";

function changeImage(secondsDelay) {
    // change the image
    if (!imageID) {
		changeBg("url(\"res/elephant.jpg\")");
        imageID++;
    } else {
		if (imageID == 1) {
			changeBg("url(\"res/tiger.jpg\")");
			imageID++;
		} else {
			if (imageID == 2) {
				changeBg("url(\"res/tiger.jpg\")");
				imageID = 0;
			}
		}
	}
	
    //call same function again for x of seconds
    setTimeout("changeImage("+secondsDelay+")",((secondsDelay)*1000));
}

function changeBg(bgSource) {
	$(backgroundLocator).fadeOut(500, function() { 
		$(this).css("background-image", bgSource).fadeIn(1000);
	});	
}