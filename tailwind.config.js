/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      width: {
        'sidebar': '309px',
        'previewScreen': '1071px',
        'md.sidebar': '294px',
        'md.previewScreen': '900px',
        'container': '1360px',

      },
      height: {
        'sidebar': '878px',
        'previewScreen': '878px',
        'md.sidebar': '782px',
        'md.previewScreen': '788px',
        'container': '921px',
      },

      backgroundImage: {
        'Icon': "url('./src/assets/Magicpen.png')",
        'Noise': "url('./src/assets/Noise.png')",
      },
      backgroundColor: {
        'secondary': '#010101',
        'primary': '#FFFFFF',
      },
    }
  },
  plugins: [],
}

