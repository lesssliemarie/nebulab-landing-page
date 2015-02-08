// iPhone scaling bug fix by @mathias, @cheeaun and @jdalton
(function(doc) {

	var addEvent = 'addEventListener',
		type = 'gesturestart',
		qsa = 'querySelectorAll',
		scales = [1, 1],
		meta = qsa in doc ? doc[qsa]('meta[name=viewport]') : [];

	function fix() {
		meta.content = 'width=device-width,minimum-scale=' + scales[0] + ',maximum-scale=' + scales[1];
		doc.removeEventListener(type, fix, true);
	}

	if ((meta = meta[meta.length - 1]) && addEvent in doc) {
		fix();
		scales = [.25, 1.6];
		doc[addEvent](type, fix, true);
	}

}(document));


(function() {
	// animation for requestBeta form
	$('#requestBeta').click(function () {
		$(this).hide();
		$('#contact-form').show(300, "swing");
	});

	// fadeOut timer for requestBetaSubmitted dialog
	setTimeout(function() {
		$('#requestBetaSubmitted').fadeOut(400);
	}, 3000);
 
})();  
