# @pgodschalk/kernelpanics.nl

Things && stuff

## Table of contents

- [@pgodschalk/kernelpanics.nl](#pgodschalkkernelpanicsnl)
  - [Table of contents](#table-of-contents)
  - [About this project](#about-this-project)
  - [Getting started](#getting-started)
    - [Dependencies](#dependencies)
    - [Install](#install)
  - [Deployment](#deployment)
    - [Build for production](#build-for-production)
    - [Built with](#built-with)
  - [Authors](#authors)
  - [License](#license)

## About this project

Personal website.

## Getting started

### Dependencies

- NodeJS >= 16
- NPM

### Install

Clone this git repository:

```sh
git clone https://github.com/pgodschalk/kernelpanics.nl.git
```

Install node modules:

```sh
npm install
```

Start the dev server:

```sh
export NODE_OPTIONS=--openssl-legacy-provider
npm run dev
```

## Deployment

### Build for production

```sh
export NODE_OPTIONS=--openssl-legacy-provider
npm run build && npm run generate
```

### Built with

- [Axios](https://github.com/axios/axios) - HTTP client
- [Babel](https://babeljs.io) - ES6 transpiler
- [ESLint](https://eslint.org) - JavaScript linter
- [NodeJS](https://nodejs.org/en/) - JavaScript runtime
- [Nuxt](https://nuxtjs.org) - JavaScript framework
- [PostCSS](https://postcss.org) - CSS transformations
- [Prettier](https://prettier.io) - Code formatter
- [StyleLint](https://stylelint.io) - CSS linter
- [Webpack](https://webpack.js.org) - bundler
- [UUID](https://github.com/uuidjs/uuid)

## Authors

- **Patrick Godschalk** - _Developer_ - [pgodschalk](https://github.com/pgodschalk)

See also the list of [contributors](https://github.com/pgodschalk/kernelpanics.nl/graphs/contributors) to this project.

## License

[SPDX](https://spdx.org/licenses/) license: `MIT`

Copyright (c) 2022 Patrick Godschalk
