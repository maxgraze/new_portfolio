<script context="module">
  import { page } from '$app/stores'
  import Head from '$components/head.svelte'
  import { client } from '$lib/graphql-client'
  import { authorsQuery } from '$lib/graphql-queries'
  import { siteMetadataStore } from '$stores/site-metadata'
  import { marked } from 'marked'

  export const load = async () => {
    const { authors } = await client.request(authorsQuery)

    return {
      props: {
        authors,
      },
    }
  }
</script>

<script>
  export let authors

  const { name, intro, bio } = authors[0]

  const {
    siteUrl,
    name: siteName,
    openGraphDefaultImage,
  } = $siteMetadataStore
</script>

<Head
  title={`About · ${siteName}`}
  description={bio.slice(0, 120)}
  image={openGraphDefaultImage.url}
  url={`${siteUrl}${$page.url.pathname}`}
/>

<div class="md:mx-40 px-10 mb-40 justify-items-center">
  <h1 class="font-bold font-display my-10  text-5xl">about</h1>

  <div class="flex items-end">
    <div class="mr-6">
      <h2 class="text-3xl mb-4 font-bold tracking-wider">{name}</h2>
      <!-- <p class="text-xl mb-4">{intro}</p> -->
    </div>
  </div>

  <article div class="prose prose-lg">
    {@html marked(bio)}
  </article>
</div>
