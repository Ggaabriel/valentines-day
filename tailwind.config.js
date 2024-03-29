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
        'like' : "url('https://ggaabriel.github.io/valentines-day/likeAnim.png')",
      },
      keyframes: {
        like: {
          from: { backgroundPosition: "0px" },
          to: { backgroundPosition: "-2400px" },
        },
      },
      animation: {
        'likeAnim' : 'like 1s steps(24) forwards;',
    },
    },
  },
  plugins: [],
};
