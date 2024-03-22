/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "movie-gray": "#121212",
        "royal-blue": "#3b83e2",
      },
      fontFamily: {
        logo: ["Pacifico", "cursive"], // Use 'Pacifico' as your font family
      },
    },
  },
  plugins: [],
};
