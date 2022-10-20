export default {
    name: "team",
    title: "team",
    type: "document",
    fields: [
        {
            name: "name",
            type: "string",
            title: "Full name",
            description: "Enter first name and surname separated by space"
            
        },
        {
            name: "title",
            title: "Title",
            type: "string"
        },
        {
            name: "profile_image",
            title: "Image",
            type: "image",
            description: "width: height:"
        },
        {
            name: "bio",
            title: "Bio",
            type: "blockContent",

        }
    ]
}