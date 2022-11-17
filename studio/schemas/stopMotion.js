export default {
    name: "stopMotion",
    title: "Stop Motion",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "url",
            title: "Url",
            type: "url",
            validation: Rule => Rule.required()
        },
        {
            name:"id",
            title: "youtubeId",
            type: "string"
        },
        {
            name: 'thumbnail',
            title: 'Thumbnail',
            type: 'image'
        }
    ]
}