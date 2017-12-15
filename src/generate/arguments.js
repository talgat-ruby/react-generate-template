module.exports = {
	libs: {
		react: {
			name: 'react',
			types: {
				CLASS: 'class',
				PURE: 'pure',
				FUNCTION: 'function'
			},
			includes: {
				css: 'css',
				flow: 'flow',
				test: 'test',
				redux: 'redux'
			}
		},
		redux: {
			name: 'redux',
			types: {
				REGULAR: 'regular',
				THUNK: 'thunk'
				// SAGA: 'saga'
			}
		}
	},
	options: {
		NO_DIR: {
			name: 'no-dir',
			alias: 'd',
			key: 'noDir'
		}
	}
};
