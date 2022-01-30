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

<h1 class="text-4xl mb-10 font-extrabold">articles</h1>

{#each articles as { title, slug, postUrl, content, coverImage, tags }}
  <div class="card shadow-2xl mb-20">
    <figure class="">
      <img
        class=""
        src={coverImage.url}
        alt={`Cover image for ${title}`}
      />
    </figure>
    <div class="card-body prose">
      <h2 class="title">{title}</h2>
      {@html marked(content).slice(0, 150)}

      <div class="justify-center card-actions">
        <a
          href={postUrl}
          target="_blank"
          class="btn btn-outline btn-primary">Read &rArr;</a
        >
        <!-- <a
          href={`/articles/${slug}`}
          class="btn btn-outline btn-primary">Read &rArr;</a
        > -->
      </div>
      <div class="flex justify-center mt-5 space-x-2">
        {#each tags as tag}
          <span class="badge badge-primary">{tag}</span>
        {/each}
      </div>
    </div>
  </div>
{/each}
