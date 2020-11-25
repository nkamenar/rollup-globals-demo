import packageJson from './package.json';
import json from '@rollup/plugin-json';
import postcss from 'rollup-plugin-postcss';
import babel from '@rollup/plugin-babel';
import postCssConfig from './postcss.config.cjs';
import { addMinExtension } from './utils/utils';
import { terser } from 'rollup-plugin-terser';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default [
	{
		// Dev Config:
		input: packageJson.input,

		// Uncomment theseComment out these
		// external: ['jquery'],
		// globals: {
		// 	jquery: '$',
		// },

		output: [
			{
				name: packageJson.moduleName,
				file: packageJson.browser,
				format: 'umd',
			},
			{
				file: packageJson.module,
				format: 'es',
			},
		],
		plugins: [
			nodeResolve(),
			commonjs({
				include: 'node_modules/**',
			}),
			json(),
			babel({ babelHelpers: 'runtime' }),
			postcss(postCssConfig.dev),
		],
	},
	{
		// Prod Config:
		input: packageJson.input,
		output: [
			{
				name: addMinExtension(packageJson.moduleName),
				file: addMinExtension(packageJson.browser),
				format: 'umd',
				sourcemap: true,
			},
			{
				file: addMinExtension(packageJson.module),
				format: 'es',
			},
		],
		plugins: [
			nodeResolve(),
			commonjs({
				include: 'node_modules/**',
			}),
			json(),
			babel({ babelHelpers: 'runtime' }),
			terser(),
			postcss(postCssConfig.prod),
		],
	},
];
