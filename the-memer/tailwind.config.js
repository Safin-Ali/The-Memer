/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{

        // White Colors
        whitePrimary: `var(--white-primary)`,
        whiteSecondary: `var(--white-secondary)`,
        whiteTertiary: `var(--white-tertiary)`,
        whiteQuaternary: `var(--white-quaternary)`,
        whiteQuinary: `var(--white-quinary)`,
        borderWhite: `var(--border-white)`,

        // Black Colors
        blackPrimary: `var(--black-primary)`,
        blackSecondary: `var(--black-secondary)`,
        blackTertiary: `var(--black-tertiary)`,
        blackQuaternary: `var(--black-quaternary)`,
        blackQuinary: `var(--black-quinary)`,

        // Others Colors
        purplePrimary: `var(--purple-primary)`,
        purpleSecondary: `var(--purple-secondary)`,
        purplePrimary08: `var(--purple-primary-08)`,
        beautyPrimary: `var(--beauty-primary)`,
        greyPrimary: `var(--grey-primary)`,
      },
      fontFamily:{
        lobster: `var(--font-lobster)`,
        raleway: `var(--font-raleway)`,
      }
    },
  },
  plugins: [],
}