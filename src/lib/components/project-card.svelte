<script>
  export let url = ''
  export let name = ''
  export let slug = ''
  export let description = ''
</script>

<div
  class="relative group card rounded-sm col-span-2 border-solid border-2 border-amber-400 "
>
  <img src={url} alt={name} class="object-cover h-full max-w-sm" />
  {#if description}
    <a href={`/projects`}>
      <div
        class="absolute bottom-0 left-0 right-0 lg:opacity-0 group-hover:opacity-90 bg-white p-4 duration-300 text-body"
      >
        <h2 class="font-display font-semibold lg:text-xl">{name}</h2>
        <p class="text-sm lg:text-xl">
          {description.slice(0, 80)}
        </p>
      </div>
    </a>
  {/if}
</div>
