import{R as e,D as s}from"./vendor-de77e6d6.js";const c="https://api-us-west-2.graphcms.com/v2/ckz00kadk1vwg01w97yop5bvu/master",r=new e.GraphQLClient(c),n=e.gql`
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
`,a=e.gql`
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
`,m=e.gql`
  ${a}
  query GetProjects {
    projects(orderBy: createdAt_DESC) {
      ...ProjectDetails
    }
  }
`,j=e.gql`
  ${a}
  query GetProject($slug: String!) {
    project(where: { slug: $slug }) {
      ...ProjectDetails
    }
  }
`,o=e.gql`
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
`;e.gql`
  ${o}
  query GetArticles {
    articles {
      ...PostDetails
    }
  }
`;const P=e.gql`
  ${o}
  query GetArticle {
    articles {
      ...PostDetails
    }
  }
`,l=e.gql`
  query GetSocials {
    socials {
      twitterUrl
      instagramUrl
      linkedinUrl
    }
  }
`,i=e.gql`
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
`,u=s({}),g=s({}),d=s({}),p=async()=>{const{socials:t}=await r.request(l);return t[0]};p().then(t=>u.set(t));const q=async()=>{const{authors:t}=await r.request(n);return t[0]};q().then(t=>g.set(t));const y=async()=>{const{projectMetadatas:t}=await r.request(i);return t[0]};y().then(t=>d.set(t));export{g as a,n as b,r as c,P as d,d as e,j as f,m as p,u as s};
