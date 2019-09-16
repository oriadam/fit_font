# fit_font
jQuery plugin to set size of font to fit the surrounding element.

# usage
	$elem.fit_font({multiline: false});
	// or
	$elem.fit_font({height: 60});
	
# defaults
	$elem.fit_font({
		multiline: true, // ignore height when false
		max: 2, // max font size value
		min: 1, // min font size value
		unit: 'em', // units for the font size
		step: /v|px|%/.test(options.unit) ? 1 : .1, // steps to take when trying sizes
		width: null, // desired width. defaults to element width
		height: null, // on multiline mode, desired element height. defaults to element width
		hide_while_working: true, // set visibility false while looking for the correct size so the user won't see the font decreases
		});
