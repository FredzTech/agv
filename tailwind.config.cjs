/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        phone: { max: "640px" },
        tablet: "641px",
        laptop: "1024px",
        desktop: "1280px",
        "2xl": "1536px",
      },
    },
    // colors: {
    //   primary: "#1F38BA",
    //   background: "#D9D9D9",
    //   secondary: "#FFFFFF",
    //   reddish: "#9D0707",
    //   greenish: "#1FBA54",
    //   fadedGreen: "#AFFFAD",
    //   fadedBlue: "#ADCEFF",
    // },
    // height: {
    //   "h-auto": "auto",
    //   "h-1/2": " 50%",
    //   "h-1/3": " 33.333333%",
    //   "h-2/3": " 66.666667%",
    //   "h-1/4": " 25%",
    //   "h-2/4": " 50%",
    //   "h-3/4	": " 75%",
    //   "h-1/5": " 20%",
    //   "h-2/5": " 40%",
    //   "h-3/5": " 60%",
    //   "h-4/5": " 80%",
    //   "h-1/6": " 16.666667%",
    //   "h-2/6": " 33.333333%",
    //   "h-3/6": " 50%",
    //   "h-4/6": " 66.666667%",
    //   "h-5/6	": " 83.333333%",
    //   "h-full": " 100%",
    //   "h-screen": " 100vh",
    //   "h-min": " min-content",
    //   "h-max": " max-content",
    //   "h-fit": " fit-content",
    // },
    // width: {
    //   "w-auto": "auto",
    //   "w-1/2": " 50%",
    //   "w-1/3": " 33.333333%",
    //   "w-2/3": " 66.666667%",
    //   "w-1/4": " 25%",
    //   "w-2/4": " 50%",
    //   "w-3/4	": " 75%",
    //   "w-1/5": " 20%",
    //   "w-2/5	": " 40%",
    //   "w-3/5": " 60%",
    //   "w-4/5": " 80%",
    //   "w-1/6": " 16.666667%",
    //   "w-2/6": " 33.333333%",
    //   "w-3/6": " 50%",
    //   "w-4/6": " 66.666667%",
    //   "w-5/6	": " 83.333333%",
    //   "w-full": " 100%",
    //   "w-screen": " 100vw",
    //   "w-min": " min-content",
    //   "w-max": " max-content",
    //   "w-fit": " fit-content",
    // },
    // fontFamily: {
    //   sans: ["Inter", "sans-serif"],
    // },
  },
  plugins: [],
};
