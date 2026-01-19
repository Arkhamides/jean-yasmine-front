import { join } from 'path'
import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms';
import { skeleton } from '@skeletonlabs/tw-plugin'
import typography from '@tailwindcss/typography';


export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: { keyframes: { fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } } }, animation: { fadeIn: 'fadeIn 1.2s ease-out forwards' } }
	},
	plugins: [
		forms,
		skeleton({
			themes: {
				preset: [
					{
						name: 'skeleton',
						enhancements: true,
					},
					{
						name: 'modern',
						enhancements: true,
					},
					{
						name: 'crimson',
						enhancements: true,
					},
					{
						name: 'sahara',
						enhancements: true,
					},
					{
						name: 'gold-nouveau',
						enhancements: true,
					},
				],
			},
		}),
		typography,
	],
} satisfies Config;
