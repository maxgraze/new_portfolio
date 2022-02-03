import { client } from '$lib/graphql-client'
import {
  authorsQuery,
  siteMetadataQuery,
  socialsQuery,
} from '$lib/graphql-queries'
import { writable } from 'svelte/store'

export const socialsStore = writable({})
export const authorsStore = writable({})
export const siteMetadataStore = writable({})

const fetchSocials = async () => {
  const { socials } = await client.request(socialsQuery)

  return socials[0]
}

fetchSocials().then(output => socialsStore.set(output))

const fetchAuthors = async () => {
  const { authors } = await client.request(authorsQuery)

  return authors[0]
}

fetchAuthors().then(output => authorsStore.set(output))

const fetchSiteMetadata = async () => {
  const { projectMetadatas } = await client.request(siteMetadataQuery)

  return projectMetadatas[0]
}

fetchSiteMetadata().then(output => siteMetadataStore.set(output))
