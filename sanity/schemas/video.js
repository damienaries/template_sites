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
            name: 'video',
            type: 'string',
            title: 'Video'
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
    ]
}