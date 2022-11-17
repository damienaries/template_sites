export default {
    name: "visuals",
    title: "Visuals",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
            validation: Rule => Rule.required()
        },
        {
            name: "url",
            title: "Url",
            type: "url",
            validation: Rule => Rule.required()
        },
        {
            name: 'thumbnail',
            title: 'Thumbnail',
            type: 'image'
        },
        {
            name:"id",
            title: "youtubeId",
            type: "string"
        },
    ]
}