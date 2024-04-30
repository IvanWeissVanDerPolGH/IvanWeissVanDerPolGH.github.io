const defaultTheme = require('tailwindcss/defaultTheme');
const withMT = require("@material-tailwind/html/utils/withMT");

module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_Pages_content/**/*.md',
    './assets/**/*.js',
    './path/to/your/javascript/files/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#007bff',
        'brand-red': '#ff4136',
        'brand-grey': '#f4f4f4',
        'brand-black': '#22292f',
        'brand-white': '#ffffff'
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '128': '32rem'
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        serif: ['Georgia', ...defaultTheme.fontFamily.serif],
        mono: ['Menlo', ...defaultTheme.fontFamily.mono]
      },
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem'

      },
      screens: {
        'xs': '480px', // extra small devices
        ...defaultTheme.screens, // default breakpoints
      },
      boxShadow: {
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'outline-normal': '0 0 0 2px rgba(66, 153, 225, 0.5)', // Custom box-shadow for focus states
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)' // Custom heavy shadow for special components
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      }
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'], // Enable opacity utilities for disabled elements
      textColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
      backgroundColor: ['checked'], // For checkbox backgrounds when checked
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Adds better defaults for form inputs and buttons
    require('@tailwindcss/typography'), // Enables the typography plugin for prose styling
    require('@tailwindcss/aspect-ratio'), // Enables aspect ratio utilities
    require('@tailwindcss/line-clamp'), // Enables utilities for line clamping
    require('tailwindcss'),
    require('autoprefixer'),
  ],
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  variants: {
    extend: {
      borderColor: ['focus-visible', 'first'],
      opacity: ['disabled']
    }
  }

};
