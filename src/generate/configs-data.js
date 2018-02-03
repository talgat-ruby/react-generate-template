module.exports = [
	{
		name: 'react',
		entry: './react/',
		description: 'generate react template',
		options: [
			{
				name: 'dest',
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
				choices: ['css', 'flow', 'jest', 'redux']
			},
			{
				name: 'no-dir',
				alias: 'n',
				description:
					'will not create directory, will create files inside <path>',
				type: 'boolean',
				require: false
			},
			{
				name: 'convention',
				alias: 'c',
				description: 'naming convention for folder & file name',
				type: 'string',
				default: 'kebab-case',
				choices: [
					'kebab-case',
					'UpperCamelCase',
					'lowerCamelCase',
					'snake_case'
				],
				require: false
			}
		]
	},
	{
		name: 'redux',
		entry: './redux/',
		description: 'generate redux template',
		options: [
			{
				name: 'dest',
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
