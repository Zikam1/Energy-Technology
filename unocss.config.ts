import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTypography,
    presetUno,
    presetWebFonts,
    transformerDirectives,
    transformerVariantGroup,
  } from 'unocss'
  
  export default defineConfig({
    shortcuts: [
      ['flex-center', 'flex items-center justify-between'],
      ['flex-v-center', 'flex items-center'],
      ['w-tha', 'wfull mx-auto max-w-screen-xl'],
      ['flex-v-align', 'flex flex-col justify-between'],
      ['t-link', 'text-3.5 fw600 hover:underline duration-300'],
      ['text-h1', 'text-center text-8 fw700 font-fira uppercase text-gray-800'],
      ['card-hover', 'lg:hover:(shadow-lg transform transition-transform -translate-y-1.5) duration-300'],
      ['bg-img', 'absolute top-0 left-0 -z-1'],
    ],
  
    theme: {
      // ...
      breakpoints: {
  
        'xs': '475px',
        // => @media (min-width: 475px) { ... }
  
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1300px',
        // => @media (min-width: 1300px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
  
        '3xl': '1780px',
        // => @media (min-width: 1780px) { ... }
      },
  
      colors: {
        t: {
          blue: '#2f56a8',
          yellow: '#ffcc00',
          red: '#c2000b',
          beach: '#f7f7f7',
        },
      },
    },
  
    presets: [
      presetUno(),
      presetAttributify(),
      presetTypography(),
      presetIcons({
        scale: 1.2,
      }),
      presetWebFonts({
        provider: 'fontshare',
        fonts: {
          // 'raleway': [
          //   {
          //       name: 'Raleway',
          //       weights: ['300', '400', '500', '600', '700'],
          //   },
          //   {
          //       name: 'san-serif',
          //       provider: 'none'
          //   }
          // ],
          fira: [
            {
              name: 'Fira Sans',
              weights: ['300', '400', '500', '600', '700'],
            },
            {
              name: 'san-serif',
              provider: 'fontshare',
            },
          ],
          general: [
            {
              name: 'General Sans',
              weights: ['300', '400', '500', '600', '700'],
            },
            {
              name: 'san-serif',
              provider: 'fontshare',
            },
          ],
        },
      }),
  
    ],
  
    transformers: [
      transformerDirectives(),
      transformerVariantGroup(),
    ],
  })
  