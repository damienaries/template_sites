export default {
    name: "video",
    title: "Video",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
            validation: Rule => Rule.required()
        },
        {
            name: "id",
            title: "Id",
            type: "string",
            validation: Rule => Rule.required()
        },
        {
            name: 'thumbnail',
            title: 'Thumbnail',
            type: 'image'
        },
        {
            name: 'service',
            title: 'Service',
            type: 'string'
        }
    ]
}