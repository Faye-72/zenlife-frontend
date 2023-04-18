/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        defaultPurple: "#fb2bff",
        defaultRed: "#ff416c",
      },
      minHeight: {},
    },
  },
  plugins: [],
};
