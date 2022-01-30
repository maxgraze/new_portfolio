import { client } from '$lib/graphql-client'
import { gql } from 'graphql-request'
import { get as meatdata } from './site-metadata.json.js'

export const get = async () => {
  const {
    body: { siteUrl },
  } = await meatdata()
  const queryArticles = gql`
    query Articles {
      articles {
        title
        slug
      }
    }
  `
  const queryProjects = gql`
    query Projects {
      projects {
        name
        slug
      }
    }
  `
  const [articlesRes, projectsRes] = await Promise.all([
    client.request(queryArticles),
    client.request(queryProjects),
  ])
  const { articles } = articlesRes
  const { projects } = projectsRes

  const pages = [`projects`, `articles`, `about`]
  const body = sitemap(articles, projects, pages, siteUrl)

  const headers = {
    'Cache-Control': 'max-age=0, s-maxage=3600',
    'Content-Type': 'application/xml',
  }
  return {
    headers,
    body,
  }
}

const sitemap = (
  articles,
  projects,
  pages,
  siteUrl
) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
  <url>
    <loc>${siteUrl}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  ${pages
    .map(
      page => `
  <url>
    <loc>${siteUrl}/${page}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  `
    )
    .join('')}
  ${articles
    .map(
      article => `
  <url>
    <loc>${siteUrl}/articles/${article.slug}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  `
    )
    .join('')}
  ${projects
    .map(
      project => `
  <url>
    <loc>${siteUrl}/projects/${project.slug}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  `
    )
    .join('')}
</urlset>`
