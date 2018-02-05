const Handlebars = require('handlebars');

function includes(arr, val, opts) {
	if (arr.includes(val)) {
		return opts.fn(this);
	} else {
		return opts.inverse(this);
	}
}

module.exports = () => {
	Handlebars.registerHelper({
		if_includes: includes
	});
};
