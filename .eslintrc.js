module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    extends: [
        'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    parserOptions: {
        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        ecmaFeatures: {
            jsx: true, // Allows for the parsing of JSX
        },
    },
    rules: {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. "@typescript-eslint/explicit-function-return-type: "off",
        strict: 0,
        'react/prop-types': [false],
        'no-unused-vars': "off",
        '@typescript-eslint/no-object-literal-type-assertion': [false, {
            allowAsParameter: false // Allow type assertion in call and new expression, default false
        }],
        '@typescript-eslint/no-unused-vars': ["warn", { "argsIgnorePattern": "^_" }],
        '@typescript-eslint/interface-name-prefix': "never",
        '@typescript-eslint/no-empty-interface': false,
        '@typescript-eslint/explicit-function-return-type': false,
        '@typescript-eslint/explicit-member-accessibility': false,
        '@typescript-eslint/no-var-requires': false
    },
    plugins: ['jest'],
    env: {
        browser: true,
        'jest/globals': true,
    },
    settings: {
        react: {
            version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
        },
        'import/resolver': {
            node: {
                moduleDirectory: ['node_modules', 'src/'],
            },
        },
    },
};
