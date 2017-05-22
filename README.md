# node-red-contrib-br-validations

A simple [Node-Red](http://nodered.org) node that validates some Brazilian documents such as CPF, CNPJ and PIS - heavily based on the [br-validations](https://www.npmjs.com/package/br-validations) library.

[![NodeRed](https://img.shields.io/badge/Node--Red-0.16.2-red.svg)](http://nodered.org)
[![NodeJS](https://img.shields.io/badge/Node.js-6.10.2-brightgreen.svg)](https://nodejs.org)
[![ESLint](https://img.shields.io/badge/codestyle-eslint-green.svg)](http://eslint.org)

## Pre-requisites

Requires [Node-Red](http://nodered.org) version 0.16.2 or more recent.

## Installation

Add this line to your package.json file:

```json
"dependencies": {
  "node-red-contrib-br-validations": "0.1.0"
}
```

And then execute:

    $ npm install

Or install it yourself as:

    $ npm i -S node-red-contrib-br-validations

## Usage

1. Set the Document Types to be validates on the node configuration;
2. Send the `message.document` to be validated to the BRValidations node;
3. Connect the success node to the first output (top);
4. Connect the error node to the second output (bottom);

<img width="681" alt="screen shot 2017-05-22 at 5 02 06 pm" src="https://cloud.githubusercontent.com/assets/361140/26326404/5dfa9754-3f11-11e7-917b-60f2e263ff64.png">

## Development

##### 1. Clone the project

    $ git clone https://github.com/sciensa/node-red-contrib-br-validations.git

##### 2. Go to the project directory

    $ cd node-red-contrib-br-validations

##### 3. Install the dependencies

    $ npm install

##### 4. Run the unit tests

    $ npm run test:unit

##### 5. Link the project

    $ npm link
    
##### 6. Run the node-red and check the node out

## Contributing

1. Follow the [Semantic Versioning Specification](http://semver.org/).
2. Follow the [GitHub Flow](https://guides.github.com/introduction/flow/).
3. Follow the [5 Useful Tips For A Better Commit Message](https://robots.thoughtbot.com/5-useful-tips-for-a-better-commit-message) article and the [How to Write a Git Commit Message](http://chris.beams.io/posts/git-commit/) post.
4. Install and use [Commitizen](http://commitizen.github.io/cz-cli/).
5. Bug reports and pull requests are welcome on [GitHub](https://github.com/sciensa/node-red-contrib-br-validations/issues).
6. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

The node is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
