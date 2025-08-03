// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
	base: '/portfolio/',
	plugins: [react()],
	server: {
		proxy: {
			'/auth': 'http://localhost:5000',
			'/profile': 'http://localhost:5000',
			'/contact': 'http://localhost:5000',
			'/upload': 'http://localhost:5000',
			'/posts': 'http://localhost:5000',
			'/images': 'http://localhost:5000',
		},
	},
})
