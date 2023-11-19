/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			body: [
				'Segoe UI',
				'-apple - system',
				'BlinkMacSystemFont',
				'Roboto',
				'Oxygen',
				'Ubuntu',
				'Cantarell',
				'Helvetica Neue',
				'Fira Sans',
				'Droid Sans',
				'Arial',
				'sans - serif',
				'Apple Color Emoji',
				'Segoe UI Emoji',
				'Segoe UI Symbol'
			]
		},
		extend: {
			colors: {
				yellow: {
					50: '#fffef7',
					100: '#fffcf0',
					200: '#fcf4d4',
					300: '#faebbb',
					400: '#f7d98b',
					500: '#f5c25a',
					600: '#dba548',
					700: '#b88133',
					800: '#945e21',
					900: '#6e3f13',
					950: '#472308'
				},
				gray: {
					100: '#fff',
					200: '#f1f1f4',
					300: '#F7F7F8',
					400: '#CED1D3',
					500: '#9DA3A8',
					600: '#6C757C',
					700: '#4C5760',
					800: '#32363a',
					900: '#23282C'
				}
			}
		}
	},
	plugins: []
};
