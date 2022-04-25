<script>
  import {
    authorsStore,
    socialsStore,
  } from '../../stores/site-metadata'
  import LinkedinIcon from './linkedin-icon.svelte'
  import TwitterIcon from './twitter-icon.svelte'
  import InstagramIcon from './instagram-icon.svelte'
  import ObservableIcon from './observable.svelte'

  const { twitterUrl, linkedinUrl, instagramUrl, observableUrl } =
    $socialsStore
  const { name: AuthorName } = $authorsStore
</script>

<footer class="p-8 footer text-body footer-center">
  <!-- <div class="grid grid-flow-col gap-4">
    <a class="link link-hover" href="/projects">Portfolio</a>
    <a class="link link-hover" href="/articles">Blog</a>
    <a class="link link-hover" href="/about">About</a>
  </div> -->
  <div>
    <div class="grid grid-flow-col gap-4">
      <a href={twitterUrl}>
        <TwitterIcon />
      </a>
      <a href={instagramUrl}>
        <InstagramIcon />
      </a>
      <a href={linkedinUrl}>
        <LinkedinIcon />
      </a>
      <a href={observableUrl}>
        <ObservableIcon />
      </a>
    </div>
  </div>
  <div>
    <p>
      {AuthorName}
    </p>
  </div>
</footer>
