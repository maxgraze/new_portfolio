import { gql } from 'graphql-request'

export const authorsQuery = gql`
  query GetAuthors {
    authors {
      name
      intro
      bio
      slug
      picture {
        url
      }
    }
  }
`

const PROJECT_FRAGMENT = gql`
  fragment ProjectDetails on Project {
    name
    slug
    description
    tags
    demo
    sourceCode
    image {
      url
    }
  }
`

export const projectsQuery = gql`
  ${PROJECT_FRAGMENT}
  query GetProjects {
    projects {
      ...ProjectDetails
    }
  }
`

export const projectQuery = gql`
  ${PROJECT_FRAGMENT}
  query GetProject($slug: String!) {
    project(where: { slug: $slug }) {
      ...ProjectDetails
    }
  }
`

const POST_FRAGMENT = gql`
  fragment PostDetails on Article {
    title
    slug
    date
    content
    postUrl
    tags
    coverImage {
      url
    }
  }
`

export const articles = gql`
  ${POST_FRAGMENT}
  query GetArticles {
    articles {
      ...PostDetails
    }
  }
`

export const articleQuery = gql`
  ${POST_FRAGMENT}
  query GetArticle {
    articles {
      ...PostDetails
    }
  }
`

export const socialsQuery = gql`
  query GetSocials {
    socials {
      twitterUrl
      instagramUrl
      linkedinUrl
    }
  }
`

export const siteMetadataQuery = gql`
  query GetProjectMetadatas {
    projectMetadatas {
      name
      siteUrl
      description
      openGraphDefaultImage {
        url
      }
    }
  }
`
