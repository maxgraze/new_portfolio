<script context="module">
  // import Head from '$components/head.svelte'
  import ProjectCard from '$components/project-card.svelte'
  import { client } from '$lib/graphql-client'
  import { authorsQuery, projectsQuery } from '$lib/graphql-queries'
  // import {
  //   authorsStore,
  //   siteMetadataStore,
  // } from '$stores/site-metadata'
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
</script>

<!-- <script>
  const {
    siteUrl,
    name: siteName,
    description,
    openGraphDefaultImage,
  } = $siteMetadataStore
  const { name: authorName } = $authorsStore
</script> -->

<!-- <h1 class="font-display  text-5xl">Welcome to my Portfolio</h1> -->
<!-- <NavBar /> -->
<div class="mb-20 text-xl md:pl-24 max-w-prose md:box-content">
  <div
    class="md:flex md:space-x-8 pt-12  md:mr-12 md:pd-0 px-7 md:px-0"
  >
    {#each authors as { name, intro, picture: { url } }}
      <!-- <div class="flex mb-10 items-end"> -->
      <div class=" md:mb-40 justify-items-center inline">
        <h2
          class=" text-4xl md:text-5xl font-display font-bold tracking-wider md:leading-3 leading-4"
        >
          {name}
        </h2>
        <span
          class="text-blue-700 font-display italic md:tracking-[.58em] tracking-[.28em]"
          >data designer</span
        >
        <br />
        <br />
        <p class=" md:text-xl mb-4">
          I <span class="underline decoration-double">research</span>,
          I
          <span class="border-2 border-slate-700 space-x-1"
            >&nbsp;write&nbsp;</span
          >, I
          <span class="underline decoration-wavy ">tinker</span>, and
          <span class="underline decoration-4"> craft</span>,
          exploring intuitive ways to represent data. Learn more about
          what I'm all about, what I've done, and how to get in touch.
        </p>
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
