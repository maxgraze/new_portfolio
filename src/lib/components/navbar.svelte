<script>
  import { page } from '$app/stores'
  const routes = [
    // { href: '/', name: 'Home' },
    { href: '/about', name: 'about' },
    { href: '/projects', name: 'projects' },
    { href: '/articles', name: 'articles' },
    // { href: '/newsletter', name: 'newsletter' },
  ]
</script>

<!-- <div class="sidebar text-neutral-content sticky w-64 py-7 px-10"> -->
<div class="flex flex-col w-2/5 text-neutral-content sticky px-8">
  <a href="/">
    <img class="hover:invert" src="./favicon.png" alt="MSG logo" />
  </a>
  <div class="dropdown dropdown-left lg:hidden">
    <!-- <div tabindex="0" class="m-1 btn">Links</div> -->
    <ul
      tabindex="0"
      class=" text-neutral-content p-2 w-52 menu dropdown-content "
    >
      <a class="btn btn-ghost btn-sm rounded-btn" href="/projects">
        Portfolio
      </a>
      <a class="btn btn-ghost btn-sm rounded-btn" href="/articles">
        Blog
      </a>
      <a class="btn btn-ghost btn-sm rounded-btn" href="/about">
        About
      </a>
    </ul>
  </div>

  <nav class=" width-full pl-8">
    {#each routes as route}
      <a
        href={route.href}
        class="transition duration-300 block hover:underline decoration-pink-900 decoration-wavy hover:text-cyan-800 text-pink-900"
        class:text-pink-900={route.href !== $page.url.pathname}
        class:text-cyan-800={route.href === $page.url.pathname}
        >{route.name}</a
      >
    {/each}
    <a
      href="https://buttondown.email/datathesenses"
      class="transition duration-300 decoration-pink-900 block hover:underline decoration-wavy hover:text-cyan-800 text-pink-900"
      target="_blank">data the senses</a
    >
  </nav>
</div>
