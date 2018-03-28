# GeneReact [![npm][npm-image]][npm-url] [![npm downloads][downloads-image]][standard-url]
its my own cli tool for the *generation of react component*

[npm-image]: https://img.shields.io/npm/v/genereact.svg
[npm-url]: https://www.npmjs.com/package/genereact
[downloads-image]: https://img.shields.io/npm/dm/genereact.svg
[downloads-url]: https://www.npmjs.com/package/genereact

## Instalations
1. `npm i -g genereact`
2. run `genereact component <name-component...>` in your project

## Several Components
The command `component` permit add several component separated for spaces.
For component names with more than one word use the character `-`.

`genereact component example more-example`

## Options
#### Path
specifies the path where the created component will be stored

`genereact component <name...> --path ./path/to/component`

the default path is `./src/components`

## License
The license here: [MIT](https://github.com/Guerrero25/genereact/LICENSE)
