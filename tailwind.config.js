/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        DarkGray: "hsl(0, 0%, 48%)",
        DarkCyan: "hsl(176, 72%, 28%)",
        ModerateCyan: "hsl(176, 50%, 47%)",
        LightGray: "#3b82f6",
      },
      fontFamily: {
        Custom: "Commissioner",
      },
    },
  },
  plugins: [],
};
