<script>
  import Footer from '$components/footer.svelte'
  import Navbar from '$components/navbar.svelte'
  import { onMount } from 'svelte'
  // import { themeChange } from 'theme-change'
  import '../app.css'

  // onMount(async () => {
  //   themeChange(false)
  // })
</script>

<main class="flex flex-col md:pt-20">
  <div class="pt-10">
    <div class="md:flex md:flex-1 overflow-hidden ">
      <Navbar />
      <!-- <main class="container max-w-3xl mx-auto px-4 mb-20"> -->
      <slot />
    </div>
  </div>
</main>
<Footer />
