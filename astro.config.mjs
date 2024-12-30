import { defineConfig } from 'astro/config';
import purgecss from 'astro-purgecss';
import icon from 'astro-icon';

export default defineConfig({
    build: {
        assets: '_astro',
        inlineStylesheets: 'auto',
        format: 'file',
        site: "https://ryn-proNight.com/",
        assetsPrefix: './'
    },
    image: {
        domains: ["astro.build"]
    },
    compressHTML: true,
    
    output: 'static',
    vite: {
        build: {
            rollupOptions: {
                output: {
                    chunkFileNames: 'assets/js/[name]-[hash].js',
                    entryFileNames: 'assets/js/[name]-[hash].js',
                    assetFileNames: ({
                        name
                    }) => {
                        // Check if the file is an image
                        if (/\.(gif|jpe?g|png|svg|webp)$/.test(name ?? '')) {
                            return 'assets/image/[name]-[hash][extname]';
                        }
                        if (/\.css$/.test(name ?? '')) {
                            return 'assets/css/[name]-[hash][extname]';
                        }
                        if (/\.mp3$/.test(name ?? '')) {
                            return 'assets/audio/[name]-[hash][extname]';
                        }

                        // default value
                        // ref: https://rollupjs.org/guide/en/#outputassetfilenames
                        return 'assets/[name]-[hash][extname]';
                    }
                }
            }
        },
        
    },
    integrations: [purgecss({
        safelist: ['a' ,'p' , 'lg-max:w-9/10' , 'sm-max:w-9/10'  ,'w-9/10' ,'responsiveLink' , 'button' , 'border'], // Keep these classes
        content: [
            process.cwd() + '/src/**/*.{astro,vue}' // Watching astro and vue sources
        ],
        css: ['./dist/**/*.css'],
        extractors: [
            {
                extractor: (content) => {
                    // Regular expression to match Tailwind-like classes, including escaped colons (\\:)
                    const matches = content.match(/(?:[\w-]+\\?:?[\w-]+)/g);
                    return matches ? matches : [];
                },
                extensions: ['html', 'js', 'jsx', 'ts', 'tsx', 'astro', 'vue'], // Add file types as needed
            },
        ],
    }), icon()]
});