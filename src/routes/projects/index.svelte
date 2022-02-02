<script context="module">
  import { page } from '$app/stores'
  import Head from '$components/head.svelte'
  import ProjectCard from '$components/project-card.svelte'
  import { client } from '$lib/graphql-client'
  import { projectsQuery } from '$lib/graphql-queries'
  import { siteMetadataStore } from '$stores/site-metadata'
  import { marked } from 'marked'

  export const load = async () => {
    const { projects } = await client.request(projectsQuery)

    return {
      props: {
        projects,
      },
    }
  }
</script>

<script>
  export let projects

  const {
    siteUrl,
    name: siteName,
    openGraphDefaultImage,
  } = $siteMetadataStore
</script>

<Head
  title={`Projects · ${siteName}`}
  description={`A list of recent projects.`}
  image={openGraphDefaultImage.url}
  url={`${siteUrl}${$page.url.pathname}`}
/>

<div class="md:inline pt-10 md:px-32 mb-40 w-4/5">
  <h1
    class=" ml-7 md:ml-0 font-display text-4xl mb-10 font-extrabold"
  >
    extracurricular activities
  </h1>
  <!-- <div class="grid gap-10 md:grid-cols-4 lg:grid-cols-6 "> -->
  <div class="px-7 md:px-0 flex flex-col md:space-y-0 space-y-12 ">
    {#each projects as { tags, demo, name, slug, description, image }, index}
      <div class="md:flex space-y-8 md:space-y-0 md:mb-20">
        <a href={demo}>
          <ProjectCard {name} url={image[0].url} {index} />
        </a>
        <div class="md:flex md:flex-col md:pl-6">
          <h1 class="text-2xl font-semibold mb-5">{name}</h1>
          <article class="prose prose-l">
            {@html marked(description)}
          </article>

          <div class=" mt-4 justify-between ">
            {#if tags}
              {#each tags as tag}
                <span
                  class="badge badge-primary mr-2 hover:bg-primary-focus cursor-pointer"
                  >{tag}</span
                >
              {/each}
            {/if}
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>
