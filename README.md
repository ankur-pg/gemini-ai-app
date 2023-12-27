## Description

Sample Chat App built with Gemini

## Installation

```bash
$ npm install
```

## ENV

Add a .env file with following key-values
    GEMINI_API_KEY=<YOUR_API_KEY>

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Use Docker

```bash
$ docker build -t gemini-app .
$ docker run -p 3000:3000 -e GEMINI_API_KEY='your_api_key' gemini-app

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

Nest is [MIT licensed](LICENSE).
