/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        'hero-grid': "url('/assets/hero-grid.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary-background': "#060334",
        'main-paragraph': "#686885",
        'main-text': "#292D34CC",
        'primary': {
          '100': "#635BFF",
        },
        'dark': {
          '600': "#111928",
        },
        'gray': {
          '200': "#EAECF0",
        }
      }
    },
  },
  plugins: [],
}
