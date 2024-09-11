/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        esm: ["400px"],
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
