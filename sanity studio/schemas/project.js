export default {
    name: "project",
    title: "Project",
    type: "document",
    fields: [
      {
        name: "project_name",
        title: "Project name",
        type: "string"
      },
      {
          name: "bridegroom",
          title: "Bridegroom",
          type: "string",
          description: "First name only"
      },
        {
            name: "bride",
            title: "Bride",
            type: "string",
            description: "First name only"
        },
        {
            name: "story",
            title: "Story",
            type: "blockContent"
        },
        {
            name: "image_one",
            title: "Image 1",
            type: "image",
            description: "width: 514 height: 720",
            fields: [
                {
                  name: 'caption',
                  type: 'string',
                  title: 'Caption',
                  options: {
                    isHighlighted: true // <-- make this field easily accessible
                  }
                },
                {
                  // Editing this field will be hidden behind an "Edit"-button
                  name: 'attribution',
                  type: 'string',
                  title: 'Attribution',
                }
              ]
        },
        {
            name: "image_two",
            title: "Image 2",
            type: "image",
            description: "width: 1049 height: 720",
            fields: [
                {
                  name: 'caption',
                  type: 'string',
                  title: 'Caption',
                  options: {
                    isHighlighted: true // <-- make this field easily accessible
                  }
                },
                {
                  // Editing this field will be hidden behind an "Edit"-button
                  name: 'attribution',
                  type: 'string',
                  title: 'Attribution',
                }
              ]
        },
        {
            name: "image_three",
            title: "Image 3",
            type: "image",
            description: "width: 514 height: 720",
            fields: [
                {
                  name: 'caption',
                  type: 'string',
                  title: 'Caption',
                  options: {
                    isHighlighted: true // <-- make this field easily accessible
                  }
                },
                {
                  // Editing this field will be hidden behind an "Edit"-button
                  name: 'attribution',
                  type: 'string',
                  title: 'Attribution',
                }
              ]
        },
        {
            name: "image_four",
            title: "Image 4",
            type: "image",
            description: "width: 781.57 height: 720",
            fields: [
                {
                  name: 'caption',
                  type: 'string',
                  title: 'Caption',
                  options: {
                    isHighlighted: true // <-- make this field easily accessible
                  }
                },
                {
                  // Editing this field will be hidden behind an "Edit"-button
                  name: 'attribution',
                  type: 'string',
                  title: 'Attribution',
                }
              ]
        },
        {
            name: "image_five",
            title: "Image 5",
            type: "image",
            description: "width: 1049 height: 720",
            fields: [
                {
                  name: 'caption',
                  type: 'string',
                  title: 'Caption',
                  options: {
                    isHighlighted: true // <-- make this field easily accessible
                  }
                },
                {
                  // Editing this field will be hidden behind an "Edit"-button
                  name: 'attribution',
                  type: 'string',
                  title: 'Attribution',
                }
              ]
        },
        {
            name: "image_six",
            title: "Image 6",
            type: "image",
            description: "width: 514 height: 720",
            fields: [
                {
                  name: 'caption',
                  type: 'string',
                  title: 'Caption',
                  options: {
                    isHighlighted: true // <-- make this field easily accessible
                  }
                },
                {
                  // Editing this field will be hidden behind an "Edit"-button
                  name: 'attribution',
                  type: 'string',
                  title: 'Attribution',
                }
              ]
        },
        {
            name: "image_seven",
            title: "Image 7",
            type: "image",
            description: "width: 782 height: 720",
            fields: [
                {
                  name: 'caption',
                  type: 'string',
                  title: 'Caption',
                  options: {
                    isHighlighted: true // <-- make this field easily accessible
                  }
                },
                {
                  // Editing this field will be hidden behind an "Edit"-button
                  name: 'attribution',
                  type: 'string',
                  title: 'Attribution',
                }
              ]
        },
        {
            name: "image_eight",
            title: "Image 8",
            type: "image",
            description: "width: 514 height: 720",
            fields: [
                {
                  name: 'caption',
                  type: 'string',
                  title: 'Caption',
                  options: {
                    isHighlighted: true // <-- make this field easily accessible
                  }
                },
                {
                  // Editing this field will be hidden behind an "Edit"-button
                  name: 'attribution',
                  type: 'string',
                  title: 'Attribution',
                }
              ]
        },
        {
            name: "image_nine",
            title: "Image 9",
            type: "image",
            description: "width: 1049 height: 720",
            fields: [
                {
                  name: 'caption',
                  type: 'string',
                  title: 'Caption',
                  options: {
                    isHighlighted: true // <-- make this field easily accessible
                  }
                },
                {
                  // Editing this field will be hidden behind an "Edit"-button
                  name: 'attribution',
                  type: 'string',
                  title: 'Attribution',
                }
              ]
        },
    ]
}