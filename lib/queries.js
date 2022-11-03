import { groq } from 'next-sanity';
// TODO move groq queries here


// Index page queries
export const indexPageQuery = groq`*[_type == "video"]{
    title,
    url
}`

export const authorQuery = groq`*[_type == "author"][0]{
    title,
    about,
    featuredOn
}`