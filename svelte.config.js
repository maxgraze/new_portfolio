import vercel from '@sveltejs/adapter-vercel'
import path from 'path'
import preprocess from 'svelte-preprocess'

const config = {
  kit: {
    adapter: vercel(),
    // hydrate the <div id="svelte"> element in src/app.html
    vite: {
      ssr: {
        external: ['whatwg-url'],
      },
      resolve: {
        alias: {
          $components: path.resolve('./src/lib/components'),
          $lib: path.resolve('./src/lib'),
          $stores: path.resolve('./src/stores'),
        },
      },
    },
  },

  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
}

export default config
