/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                "inter": ["Inter", "sans-serif"],
            },
            colors: {
                "pro_black": "#344054BF",
            },
        },
    },
    plugins: [],
};
