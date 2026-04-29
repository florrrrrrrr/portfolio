/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // Display: a beautiful variable serif for headlines
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        // Body: a modern, refined sans for everything else
        sans: ['"DM Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        // Warm, paper-like background and deep ink for text
        cream: '#FAF7F2',
        ink: '#1A1816',
        muted: '#6B6660',
        accent: '#C0492C', // a warm terracotta accent
      },
      maxWidth: {
        prose: '68ch',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
