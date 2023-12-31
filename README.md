# wwebjs-grpc

> [!IMPORTANT]
> This project is currently a work in progress. IT IS NOT READY FOR PRODUCTION USE.

## Overview

wwebjs-grpc is a bridge of the library `whatsapp-web.js` as a language agnostic gRPC server, facilitating integration across various platforms and languages.

## Getting Started

### Docker

**Not supported yet.**

### Bare metal

#### Prerequisites

- Node.js
- npm | yarn | pnpm

#### Running the project

Before running the project, make sure you have the repository cloned to your local machine and the dependencies installed.

```sh
git clone https://github.com/ugsto/wwebjs-grpc.git
cd wwebjs-grpc
```

##### Using npm

```sh
npm install
```

##### Using yarn

```sh
yarn install
```

##### Using pnpm

```sh
pnpm install
```

---

After installing the dependencies, you can run the project in development mode with:

```sh
npm run start
```

#### Building the project

In order to build the project, run:

```sh
npm run build  # or yarn build, or pnpm build
```

The project will be built in the `dist` directory, where it can be run with `node dist/index.cjs`.

## Usage

**Work in progress.**

## Running Tests

To execute tests, run:

```bash
npm test
```

## License

This project is licensed under the AGPL-3.0 License - see the [LICENSE](https://github.com/ugsto/wwebjs-grpc/blob/master/LICENSE) file for details.

## Acknowledgments

This project is built on top of the [`whatsapp-web.js`](https://github.com/pedroslopez/whatsapp-web.js) library. Special thanks to the contributors of that project.

_This README is subject to change as the project evolves._
