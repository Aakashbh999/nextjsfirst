/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
        backgroundImage: {
          'hero-pattern': "url('/img/hero-pattern.svg')",
          'custom-image': "url('/images/your-image.jpg')",
          'footer-texture': "url('/img/footer-texture.png')",
        }
    },
  },
  plugins: [],
};
