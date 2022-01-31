<script context="module">
  import Head from '$components/head.svelte'
  import ProjectCard from '$components/project-card.svelte'
  import { client } from '$lib/graphql-client'
  import { authorsQuery, projectsQuery } from '$lib/graphql-queries'
  import {
    authorsStore,
    siteMetadataStore,
  } from '$stores/site-metadata'
  import NavBar from '$components/navbar.svelte'

  export const load = async () => {
    const [authorRes, projectsRes] = await Promise.all([
      client.request(authorsQuery),
      client.request(projectsQuery),
    ])
    const { authors } = authorRes
    const { projects } = projectsRes

    return {
      props: {
        projects,
        authors,
      },
    }
  }
  //   <Head
  //   title={`${siteName} · ${authorName}`}
  //   {description}
  //   image={openGraphDefaultImage.url}
  // />
  //  url={`${siteUrl}`} <- for Head

  //underline decoration-indigo-500/30
</script>

<script>
  export let projects
  export let authors

  const {
    siteUrl,
    name: siteName,
    description,
    openGraphDefaultImage,
  } = $siteMetadataStore
  const { name: authorName } = $authorsStore
</script>

<!-- <h1 class="font-display  text-5xl">Welcome to my Portfolio</h1> -->
<!-- <NavBar /> -->
<div class="mb-20 text-xl max-w-prose">
  <div
    class="md:flex md:space-x-8 pt-40 md:mr-12 md:pd-0 px-7 md:px-0"
  >
    {#each authors as { name, intro, picture: { url } }}
      <!-- <div class="flex mb-10 items-end"> -->
      <div class="md:mb-40 justify-items-center">
        <h2
          class="text-5xl font-display mb-4 font-bold tracking-wider"
        >
          {name}
        </h2>
        <p class="text-xl mb-4">{intro}</p>
      </div>

      <img
        class="mx-auto block mb-20 mask mask-squircle h-48"
        src={url}
        alt={name}
      />
      <!-- </div> -->
    {/each}
  </div>

  <div
    class="px-7  grid gap-10 md:grid-cols-4 md:px-0 lg:grid-cols-6 "
  >
    {#each projects as { name, slug, description, image }}
      <ProjectCard {name} {description} url={image[0].url} {slug} />
    {/each}
  </div>
</div>
