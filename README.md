# How to setup testing using Typescript, Mocha, Chai, Sinon, Karma and Webpack.

Sample source code based on blog post: [How to setup testing using Typescript, Mocha, Chai, Sinon, Karma and Webpack](http://templecoding.com/blog/2016/02/02/how-to-setup-testing-using-typescript-mocha-chai-sinon-karma-and-webpack/)

# To get started:  

1. Install [NodeJS](http://www.nodejs.org)
2. Open the command line of your choice and cd to the root directory of this repo on your machine
3. `npm install webpack -g` - Installs webpack
4. `npm install tsd -g` - Installs tsd
5. Download this repo (clone / fork)
6. `npm install` - Installs packages (post install step added to package.json configuration file in order to execute tsd install after installing packages)
7. `npm test` - Will execute karma start and run the tests (this step has been added to the package.json configuration file).

# Change Log:  

- Mar 17, 2015 - Added post install step to automatically run tsd install after npm install.
