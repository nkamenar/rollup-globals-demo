// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
	// Stop running tests after the first failure, may set to number of allowed failures.
	// bail: false,

	// Automatically clear mock calls and instances between every test
	clearMocks: true,

	// Indicates whether the coverage information should be collected while executing the test
	collectCoverage: true,

	// The directory where Jest should output its coverage files
	coverageDirectory: './src/tests/coverage',

	// An array of regexp pattern strings used to skip coverage collection
	// coveragePathIgnorePatterns: [
	//   "/node_modules/"
	// ],

	// A list of reporter names that Jest uses when writing coverage reports
	coverageReporters: ['json', 'text', 'lcov', 'clover'],

	// An object that configures minimum threshold enforcement for coverage results
	coverageThreshold: {
		global: {
			branches: 90,
			functions: 90,
			lines: 90,
			statements: -10,
		},
	},

	// A path to a module which exports an async function that is triggered once before all test suites
	// globalSetup: null,

	// A path to a module which exports an async function that is triggered once after all test suites
	// globalTeardown: null,

	// A set of global variables that need to be available in all test environments
	// globals: {},

	// An array of file extensions your modules use
	moduleFileExtensions: ['js', 'json', 'jsx'],

	// An array of regexp pattern strings, matched against all module paths before considered 'visible' to the module loader
	// modulePathIgnorePatterns: [],
	modulePathIgnorePatterns: ['node_modules/', 'dist/*'],

	// A map from regular expressions to paths to transformers
	transform: {
		'.+\\.(css|css!|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
			'jest-transform-stub',
		'^.+\\.(js|jsx)?$': 'babel-jest',
	},

	// An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
	transformIgnorePatterns: ['/node_modules/', '/dist/', '/docs/'],

	// Indicates whether each individual test should be reported during the run
	//verbose: true,
};
