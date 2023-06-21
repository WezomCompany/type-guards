import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		environment: 'jsdom',
		coverage: {
			reporter: ['json-summary', 'html'],
		},
	},
});
