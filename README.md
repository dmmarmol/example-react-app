# Example React App

> Project build with `create-react-app`

App build using reactjs & redux that will query a list of players from a static json and allow filtering

### Development

# Important

First of all, you must manually create an `.env` file at the root of your project to `import` every dependency from `./src` directory as root.
Copy & paste the contents below into your `.env` file

```dotenv
BABEL_ENV=development
NODE_ENV=development
# https://github.com/facebook/create-react-app/issues/5645#issuecomment-461999138
NODE_PATH=src/
```

Run a development server through the command

```
yarn start
```

### Imports

Imports are resolved from `src/` dir.

### Source of Information

1. [Setting up linters in project](https://codeburst.io/hello-create-react-app-cra-typescript-8e04f7012939)
2. [Typescript: Using Typed Theme in Styled-Components](https://github.com/styled-components/styled-components/issues/1589#issuecomment-435613664)
3. [Typescript: Using Typescript interfaces in Styled-Components](https://github.com/styled-components/styled-components/issues/630#issuecomment-290569741)
4. [Use EsLint to linter your Typescript projects](https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project)
