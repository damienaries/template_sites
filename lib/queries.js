import { groq } from 'next-sanity';
// TODO move groq queries here


// Index page queries
export const indexPageQuery = groq`*[_type == "video"]{
    title,
    url
}`