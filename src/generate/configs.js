module.exports = [
	{
		name: 'react',
		description: 'generate react template',
		options: [
			{
				name: 'path',
				description: 'directory where insert file(s)',
				type: 'string',
				require: true
			},
			{
				name: 'name',
				description: 'component name (capitalized camel case)',
				type: 'string',
				require: true
			},
			{
				name: 'type',
				description: 'type of component',
				type: 'string',
				require: true,
				choices: ['class', 'pure', 'functional']
			},
			{
				name: 'include',
				description: 'include features',
				type: 'array',
				require: true,
				choices: ['css', 'flow', 'jest', 'redux']
			},
			{
				name: 'no-dir',
				description:
					'Will not create directory, will create files inside <path>',
				type: 'boolean',
				require: false
			}
		]
	},
	{
		name: 'redux',
		description: 'generate redux template',
		options: [
			{
				name: 'path',
				description: 'directory where insert file(s)',
				type: 'string',
				require: true
			},
			{
				name: 'name',
				description: 'folder name and/or filename',
				type: 'string',
				require: true
			},
			{
				name: 'type',
				description: 'type of component',
				type: 'string',
				require: true,
				choices: ['regular', 'thunk', 'saga']
			}
		]
	}
];
