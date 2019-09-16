# fit_font
jQuery plugin to set size of font to fit the surrounding element.

# usage
	$elem.fit_font();
	
# defaults
	$elem.fit_font({
		ignore: false, // false (default) or 'width' or 'height'
		max: 2, // max font size value
		min: 1, // min font size value
		unit: 'em', // units for the font size
		step: .1, // steps to take when trying sizes
	});
