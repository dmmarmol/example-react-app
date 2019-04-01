module.exports = {
    // testPathIgnorePatterns: ['/node_modules/'],
    // unmockedModulePathPatterns: ['./node_modules/react'],
    testRegex: '(/src/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
    // moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
    // moduleDirectories: ['node_modules', 'bower_components', 'src'],
    // rootDir: '<rootDir>/src',

    transform: {
        '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
        '^.+\\.(js|jsx)?$': 'babel-jest',
        '^.+\\.(ts|tsx)?$': 'babel-jest',
    },
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    // testMatch: ['<rootDir>/(tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))'],
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
};
