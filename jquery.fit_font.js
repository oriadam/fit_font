// https://github.com/oriadam/fit_font
(function ($)
{
	// calculate correct font size to fit the element width
	$.fn['fit_font'] = function (options)
	{
		options = $.extend({
			multiline: true, // ignore height when false
			max: 2, // max font size value
			min: 1, // min font size value
			unit: 'em', // units for the font size
			step: /v|px|%/.test(options.unit) ? 1 : .1, // steps to take when trying sizes
			width: null, // desired width. defaults to element width
			height: null, // on multiline mode, desired element height. defaults to element width
			hide_while_working: true // set visibility false while looking for the correct size so the user won't see the font decreases
		}, options);
		return this.each(function ()
		{
			let max_loops = 200; // fail safe. should not be needed, but better safe than sorry.
			let size = options.max;
			let elem = this;
			let previous;
			let width = options.width || $(elem).outerWidth();
			let height = options.height || $(elem).outerHeight();
			if (width === 0 || height === 0)
				return console.log('fit_font error 103: element has not width/height', elem);
			if (options.hide_while_working)
				elem.style.visibility = 'hidden';
			if (!options.multiline)
				elem.style.whiteSpace = 'nowrap';
			elem.style.fontSize = size + options.unit;
			while (max_loops-- && size > options.min && ((elem.scrollWidth > width) || (options.multiline ? elem.scrollHeight > height : false)))
			{
				size -= options.step;
				previous = [elem.scrollWidth, elem.scrollHeight];
				elem.style.fontSize = size + options.unit;
				if (elem.scrollWidth === previous[0] && elem.scrollHeight === previous[1])
				{
					console.log('fit_font error 101: element has important font size or step parameter is too small', elem); // if w/h haven't changed, quit - our efforts are in vain
					break;
				}
				if (options.multiline && !options.height && height !== $(elem).outerHeight())
				{
					console.log('fit_font error 102: multiline require fixed height element or the height parameter', elem); // if w/h haven't changed, quit - our efforts are in vain
					break;
				}
			}
			if (options.hide_while_working)
				elem.style.visibility = '';
			if (!options.multiline)
				elem.style.whiteSpace = '';
		});
	};
})(jQuery);
