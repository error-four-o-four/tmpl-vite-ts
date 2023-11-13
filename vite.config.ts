import { defineConfig } from 'vite';

import postcssNesting from 'postcss-nesting';
import postcssCustomMedia from 'postcss-custom-media';

export default defineConfig({
	css: {
		postcss: {
			plugins: [postcssNesting(), postcssCustomMedia()],
		},
	},
});
