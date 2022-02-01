<script context="module">
  import { page } from '$app/stores'
  import Head from '$components/head.svelte'
  import { client } from '$lib/graphql-client'
  import { articleQuery } from '$lib/graphql-queries'
  import { siteMetadataStore } from '$stores/site-metadata'
  import { marked } from 'marked'

  export const load = async () => {
    const { articles } = await client.request(articleQuery)

    return {
      props: {
        articles,
      },
    }
  }
</script>

<script>
  export let articles

  const {
    siteUrl,
    name: siteName,
    openGraphDefaultImage,
  } = $siteMetadataStore
</script>

<Head
  title={`articles! · ${siteName}`}
  description={`A list of recent articles.`}
  image={openGraphDefaultImage.url}
  url={`${siteUrl}${$page.url.pathname}`}
/>
<div class="inline pt-20 md:px-32 mb-40 w-4/5">
  <h1
    class=" ml-7 md:ml-none font-display text-4xl mt-16 mb-10 font-extrabold"
  >
    articles
  </h1>

  {#each articles as { title, slug, postUrl, content, coverImage, tags }}
    <div
      class="border-solid border-2 border-amber-400  shadow-1xl mb-10 hover:-hue-rotate-180	"
    >
      <figure class="">
        <a href={postUrl} target="_blank">
          <img
            class=""
            src={coverImage.url}
            alt={`Cover image for ${title}`}
          />
        </a>
      </figure>
      <!-- <div class="card-body prose">
      <h2 class="title">{title}</h2>
      {@html marked(content).slice(0, 150)}

      <div class="justify-center card-actions">
        <a
          href={postUrl}
          target="_blank"
          class="btn btn-outline btn-primary">Read &rArr;</a -->

      <!-- <a
          href={`/articles/${slug}`}
          class="btn btn-outline btn-primary">Read &rArr;</a
        > -->
      <!-- </div> -->
    </div>
    <div class="flex justify-center mt-5 space-x-2">
      {#each tags as tag}
        <span
          class="border-solid border-2 text-center border-amber-400 shadow-1xl mb-20 p-1"
          >{tag}</span
        >
      {/each}
    </div>
    <!-- </div> -->
  {/each}
</div>
