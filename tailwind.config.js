/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderColor: {
        primary: "rgb(85, 81, 227)",
        secondary: "#2b2d77",
      },
    },
    fontFamily: {
      montserrat: "Montserrat",
      poppins: "Poppins",
      metal: "Metal Mania",
      rowdies: "Rowdies",
    },
    backgroundImage: {
      img1: "url('/assets/img.avif')",
    },
  },
  plugins: [],
};
