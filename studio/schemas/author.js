export default {
    name: "author",
    title: "Author",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
            validation: Rule => Rule.required()
        },
        {
            name: "image",
            title: "Image",
            type: "image",
        },
        {
            name: "about",
            title: "About",
            type: "text"
        },
        {
            name: "featuredOn",
            title: "Featured On",
            type: "array",
            of: [{type: 'visuals'}]
        }
    ]
}