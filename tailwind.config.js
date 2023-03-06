/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'entry-pattern': "url('https://assets.nflxext.com/ffe/siteui/vlv3/d54727b4-2ad9-4e71-bb48-0899f55f103a/32120878-6848-483f-8bc6-968a9bdd9f8f/AZ-en-20230220-popsignuptwoweeks-perspective_alpha_website_large.jpg')",
        'download-gif' : "url(https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif)",
        'enjoy-img': "url(https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png)"
      },
      colors: {
        'primary-red': '#e50914',
      }, 
    },
    screens: {
      'mobile': '320px',
      // => @media (min-width: 640px) { ... }

      'tablet': '800px',
      // => @media (min-width: 1024px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}
