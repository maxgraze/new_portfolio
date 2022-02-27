<script>
  import { page } from '$app/stores'
  import { onMount } from 'svelte'

  const routes = [
    // { href: '/', name: 'Home' },
    { href: '/about', name: 'about' },
    { href: '/projects', name: 'projects/events' },
    { href: '/articles', name: 'articles' },
    // { href: '/newsletter', name: 'newsletter' },
  ]

  let pathname
  onMount(async () => {
    pathname = $page.url.pathname
  })
</script>

<!-- <div class="sidebar text-neutral-content sticky w-64 py-7 px-10"> -->
<div
  class="flex md:flex-col md:w-1/5 text-sm md:text-base md:text-neutral-content md:px-8"
>
  <a href="/">
    <img
      class=" hover:invert md:max-w-md w-44"
      src="./favicon.png"
      alt="MSG logo"
    />
  </a>

  <nav class="flex-row md:width-full md:pl-6 pt-6 md:pt-0">
    {#each routes as route}
      <a
        href={route.href}
        class="transition duration-300 md:block hover:underline decoration-pink-900 decoration-wavy hover:text-cyan-800 text-pink-900"
        class:text-pink-900={route.href !== pathname}
        class:text-cyan-800={route.href === pathname}>{route.name}</a
      >
      <span class="md:hidden"> |&nbsp;</span>
    {/each}
    <a
      href="https://buttondown.email/datathesenses"
      class="transition duration-300 decoration-pink-900 italic md:not-italic md:block hover:underline decoration-wavy hover:text-cyan-800 text-pink-900 "
      target="_blank">data the senses</a
    >
  </nav>
</div>
