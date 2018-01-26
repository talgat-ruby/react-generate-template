# Simple react template generator

creates sample templating for react projects

## Structure

creates folder(if not specified otherwise), and component inside of it. </br>
Uses the kebab-case for specifying folder and file names. For example:

* `home-page.js` - inside will be capitalized CamelCase component name
  `HomePage`

## Installation

### Globally

install dependency as global module

```sh
yarn add global react-generate-template
```

### Locally

or install locally

```sh
yarn add --dev react-generate-template
```

after installing add to `package.json` to `scripts`

```json
{
	"scripts": {
		"generate": "react-generate-template"
	}
}
```

## Use

### Gloablly

```sh
react-generate-template REST_OF_COMMAND
```

### Locally

if you set up you script as above</br>
You can run

```sh
yarn generate REST_OF_COMMAND
```

### REST

after that conosle shows what you need/can add</br></br>
I will add possible/list of commands later.
