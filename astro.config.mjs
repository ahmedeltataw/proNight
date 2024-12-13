import { defineConfig } from 'astro/config';

// https://purgecss.com/configuration.html#configuration-file
import purgecss from 'astro-purgecss';

// https://github.com/jonathantneal/astro-icon
import icon from 'astro-icon';
// https://astro.build/config
export default defineConfig({
    build: {
        assets: '_astro',
        // assets: 'assets',
        inlineStylesheets: 'auto',
        // inlineStylesheets: 'never',
        format: 'file',
        site: "https://ryn-proNight.com/",
        // base: '/',
        // assetsPrefix: './'
    },

    image: {
        domains: ["astro.build"]
    },

    compressHTML: true,

    //   optimizeHoistedScript: true,
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
        }

    },

    integrations: [purgecss({
        safelist: ['a'], // Keep these classes
        content: [
            process.cwd() + '/src/**/*.{astro,vue}' // Watching astro and vue sources (read SSR docs below)
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