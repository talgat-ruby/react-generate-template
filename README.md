# Simple react template generator

creates sample templating for react projects

## Structure

creates folder(if not specified otherwise), and component inside of it. </br>
Uses the kebab-case for specifying folder and file names. For example:

* `home-page.js` - inside will be capitalized CamelCase component name
  `HomePage`

## Dependencies

install dependencies by coping and pasting into terminal the next line

```sh
yarn add --dev yargs chalk readline-sync
```

## Preparation

Add this line to `package.json`. Example uses npm script name as `generate`, you
can call it whatever you want of course.

```json
{
  "scripts": {
    ...,
    "generate": "node react-template-generator/generate/"
  }
}
```

## Run

Call it

```
yarn generate
```

after that at conosle shows what you need/can add
