/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bannerImg: "url('/public/images/bg.jpg')",
      },
      screens: {
        esm: "400px",
        // => @media (min-width: 400px) { ... }
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      container: {
        center: true,
      },
    },
    fontFamily: {
      poppinsReg: ["poppins-regular"],
      poppinsSemibold: ["poppins-SemiBold"],
      Trebuchet: ["Trebuchet Ms"],
      Libre: ["libreFranklin"],
    },
  },
  plugins: [],
};
