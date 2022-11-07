import { groq } from 'next-sanity';
// TODO move groq queries here


// Index page queries
export const videoQuery = groq`*[_type == "video"]{
    title,
    url,
    id,
    service,
    thumbnail
}`

export const authorQuery = groq`*[_type == "author"][0]{
    title,
    about,
    featuredOn
}`

export const visualsQuery = groq`*[_type == "visuals"]{
    title,
    url
}`

export const stopMotionQuery = groq`*[_type == "stopMotion"]{
    url
}`