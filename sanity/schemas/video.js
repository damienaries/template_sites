export default {
    name: 'video',
    type: 'document',
    title: 'Video',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'cover',
            type: 'image',
            title: 'Cover'
        },
        {
            name: 'producedYear',
            type: 'string',
            title: 'Produced Year'
        },
        {
            name: 'isHomapageHero',
            type: 'boolean',
            title: 'Hero video'
        },
        {
            name: 'url',
            type: 'url',
            title: 'Video Url'
        }
    ]
}