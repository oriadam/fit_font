# jquery.fit_font
jQuery plugin to set size of font to fit the surrounding element.

# example
https://codepen.io/oriadam/pen/ZEYxeZw

# usage
	$elem.fit_font({multiline: false});
	// or
	$elem.fit_font({height: 60});
	
# defaults
	$elem.fit_font({
			multiline: true, // ignore height when false
			max: 24, // max font size value
			min: 15, // min font size value
			unit: 'px', // units for the font size
			step: /em/.test(options.unit) ? .1 : 1, // steps to take when trying sizes
			width: null, // desired width. defaults to element width
			height: null, // on multiline mode, desired element height. defaults to element width
			hide_while_working: true // set visibility false while looking for the correct size so the user won't see the font decreases
		});
