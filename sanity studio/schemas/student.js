export default {
    name: "student",
    title: "Student",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
            options: {
                maxLength: 3
            }
        },
        {
            name: "photo",
            title: "Profile photo",
            type: "image"
        },
        {
            name: "marital_status",
            title: "Married",
            type: "boolean"
        },
        {
            name: "age",
            title: "Age",
            type: "number"
        },
        {
            name: "article",
            title: "Article",
            type: "blockContent"
        }
    ]

}