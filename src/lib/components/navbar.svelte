<script>
  import { page } from '$app/stores'
  const routes = [
    // { href: '/', name: 'Home' },
    { href: '/about', name: 'about' },
    { href: '/projects', name: 'projects' },
    { href: '/posts', name: 'posts' },
  ]
</script>

<div
  class="sidebarbg-neutral text-neutral-content sticky w-64 space-y-6 py-7 px-2"
>
  <div class="flex-1 px-2 mx-2">
    <a class="text-lg font-bold" href="/"> Portfolio and Blog </a>
  </div>

  <div class="dropdown dropdown-left lg:hidden">
    <div tabindex="0" class="m-1 btn">Links</div>
    <ul
      tabindex="0"
      class="bg-neutral text-neutral-content p-2 w-52 menu dropdown-content "
    >
      <a class="btn btn-ghost btn-sm rounded-btn" href="/projects">
        Portfolio
      </a>
      <a class="btn btn-ghost btn-sm rounded-btn" href="/posts">
        Blog
      </a>
      <a class="btn btn-ghost btn-sm rounded-btn" href="/about">
        About
      </a>
    </ul>
  </div>

  <nav class="sticky top-0 z-50">
    {#each routes as route}
      <a
        href={route.href}
        class="transition duration-300 block py-1 px-4"
        class:text-blue-300={route.href !== $page.url.pathname}
        class:text-gray-400={route.href === $page.url.pathname}
        >{route.name}</a
      >
    {/each}
  </nav>
</div>
