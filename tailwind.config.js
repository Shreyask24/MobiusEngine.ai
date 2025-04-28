/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'dm-sans': 'var(--font-dm-sans)',
                'sora': 'var(--font-sora)',
            },
        },
    },
    plugins: [],
}
