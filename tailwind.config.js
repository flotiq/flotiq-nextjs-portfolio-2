module.exports = {
    content: [
        './node_modules/flotiq-components-react/dist/**/*.{js,jsx,ts,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            screens: {
                sm: '480px',
                md: '768px',
                lg: '976px',
                xl: '1440px',
            },
            colors: {
                primary: '#323232',
                secondary: '#0083FC',
                gray: '#969696',
                'medium-gray': '#f9f9f9',
                'light-gray': '#f1f1f1',
            },
            fontFamily: {
                lora: ['Lora', 'sans-serif'],
                archivo: ['Sora', 'sans-serif'],
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
    presets: [
        require('./node_modules/flotiq-components-react/dist/tailwind.preset'), // Flotiq Component theme presets
    ],
    safelist: require('./node_modules/flotiq-components-react/dist/tailwind.safelist'),
}
