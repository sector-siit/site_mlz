import type { Config } from "tailwindcss";
import flowbyte from 'flowbite-react/tailwind'

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        flowbyte.content()
    ],
    darkMode: 'class',
    theme: {
        screens: {
            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        },
        container: {
            padding: '1rem',
            center: true,
            screens: {
                'sm': '80%',
                'md': '80%',
                'lg': '1024px',
                'xl': '1232px',
                '2xl': '1232px',
            }
        },
        extend: {
            fontFamily: {
                geometria: ['Geometria']
            },
            colors: {
                "muni-primary": {
                    '50': 'rgba(243, 247, 252, 1)',
                    '600': 'rgba(35, 105, 153, 1)'
                },
                "azul-muni": {
                    '50': '#f2f8fd',
                    '100': '#e3f0fb',
                    '200': '#c1e1f6',
                    '300': '#8bc9ee',
                    '400': '#4daee3',
                    '500': '#2694d1',
                    '600': '#1774af',
                    '700': '#145e90',
                    '800': '#155077',
                    '900': '#174363',
                    '950': '#0f2c42',
                    'texto': '#236999',
                },
                "cards-muni": {
                    'azul': '#236999',
                    'gris': 'rgba(0, 0, 0, 0.05)',
                    'blanco': '#f3f7fc',
                    'iconbg': 'rgba(255, 255, 255, 0.2)',
                    'light-sky': '#E5F0F9',
                    'light-blue': '#94C6E5',
                    'soft-sky-blue': '#C6DFF1'
                },
                "section": {
                    'vermas': 'rgba(35, 105, 153, 1)'
                }
            },
            fontSize: {
                'title-section': ['40px', '50.32px']
            },
            gridTemplateColumns: {
                'municipio': '2fr 1fr'
            },

        },
    },
    // safelist:[
    //   'bg-azul-muni-700',
    // ],
    plugins: [
        flowbyte.plugin()
    ],
};
export default config;
