$ (function() {
	$ ('header').hover(function() {
		$('nav').animate({
			marginTop: '+=100'
		})
	}, function() {
		$('nav').animate({
			marginTop: '-=100'
		})
	})
})
