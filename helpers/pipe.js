/* eslint-disable */

exports.pipe = (...funcs) => (...args) =>
	funcs.reduce(
		(arg, func, i) => (i === 0 ? arg : func(arg)),
		funcs[0](...args)
	);

exports.inversePipe = (...args) => (...funcs) =>
	funcs.reduce(
		(arg, func, i) => (i === 0 ? arg : func(arg)),
		funcs[0](...args)
	);
