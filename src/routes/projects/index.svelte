<script context="module">
  import { page } from '$app/stores'
  import Head from '$components/head.svelte'
  import ProjectCard from '$components/project-card.svelte'
  import { client } from '$lib/graphql-client'
  import { projectsQuery } from '$lib/graphql-queries'
  import { siteMetadataStore } from '$stores/site-metadata'
  import { marked } from 'marked'

  //                  class="badge badge-primary mr-2 hover:bg-primary-focus cursor-pointer"

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
  <div class="px-7 md:px-0 flex flex-col space-y-12 ml-12 md:ml-0">
    {#each projects as { tags, demo, name, slug, description, image }, index}
      <div class="md:flex space-y-8 md:space-y-0 md:mb-20">
        {#if image}
          <a href={demo}>
            <ProjectCard {name} url={image[0].url} {index} />
          </a>
        {/if}
        <div class="md:flex md:flex-col md:pl-6">
          <h1 class="text-2xl font-semibold mb-5">{name}</h1>
          <article class="prose prose-l">
            {@html marked(description)}
          </article>
          <div
            class="align-middle md:align-baseline relative md:inherit text-center	mt-5 space-x-2 md:inherit md:flex md:justify-center"
          >
            {#if tags}
              {#each tags as tag}
                <span
                  class="mt-2 md:mt-0 inline-block border-solid border-2 text-center border-amber-400 shadow-1xl md:mb-20 p-1"
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
