import packageJson from './package.json';
import path from 'path';
import cssnano from 'cssnano';
import url from 'postcss-url';
import { addMinExtension } from './utils/utils';

const cssnanoConfig = cssnano({
	preset: [
		'default',
		{
			discardComments: {
				removeAll: true,
			},
		},
	],
});

const urlOptions = {
	url: 'inline',
};

export default {
	dev: {
		extract: path.resolve(packageJson.style),
		parser: 'postcss-scss',
		use: ['sass'],
		plugins: [
			require('postcss-preset-env'),
			require('precss'),
			require('autoprefixer'),
			url(urlOptions),
		],
	},
	prod: {
		extract: path.resolve(addMinExtension(packageJson.style)),
		parser: 'postcss-scss',
		use: ['sass'],
		plugins: [
			require('postcss-preset-env'),
			require('precss'),
			require('autoprefixer'),
			url(urlOptions),
			cssnanoConfig,
		],
	},
};
