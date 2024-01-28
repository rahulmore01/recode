/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        skyBlue: "#50F9FC",
        darkPink: "#E24EF3",
        mediumYellow: "#FCEF5B",
        darkGray: "#232323",
        lightGray: "#F2F2F2",
        background: "#161616",
      },
      screens: {
        vs: "300px",
        vms: "400px",
        s: "500px",
        md: "700px",
        mlg: "1000px",

        lg: "1200px",
        xlg: "1500px",
      },
    },
  },
  plugins: [],
};
