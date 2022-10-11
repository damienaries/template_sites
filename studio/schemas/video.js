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
            name: "slug",
            title: "Slug",
            type: "slug",
            validation: Rule => Rule.required(),
            options: {
                source: "title",
                maxLength: 96
            }
        },
        {
            name: "url",
            title: "Url",
            type: "url"
        },
        {
            name: "date",
            title: "Date",
            type: "date"
        }
    ]
}