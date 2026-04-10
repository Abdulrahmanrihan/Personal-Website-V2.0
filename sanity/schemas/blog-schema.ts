const blog = {
    name: "blog",
    title: "Blog",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Name",
        type: "string",
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: { source: "name" }
      },
      {
        name: "image",
        title: "Image",
        type: "image",
        options: { hotspot: true },
        fields: [
          {
            name: "alt",
            title: "Alt",
            type: "string"
          }
        ]
      },
      {
        name: "date",
        title: "Date",
        type: "date",
      },
      {
        name: "category",
        title: "Category",
        type: "string"
      },
      {
        name: "subtitle",
        title: "Subtitle",
        type: "string"
      },
      {
        name: "content",
        title: "Content",
        type: "array",
        of: [
          {
            type: "block",
            styles: [
              { title: "Normal", value: "normal" },
              { title: "Heading 2", value: "h2" },
              { title: "Heading 3", value: "h3" },
              { title: "Blockquote", value: "blockquote" },
            ],
            lists: [
              { title: "Bullet", value: "bullet" },
              { title: "Numbered", value: "number" },
            ],
            marks: {
              decorators: [
                { title: "Bold", value: "strong" },
                { title: "Italic", value: "em" },
                { title: "Underline", value: "underline" },
                { title: "Code", value: "code" },
              ],
              annotations: [
                {
                  name: "link",
                  type: "object",
                  title: "Link",
                  fields: [
                    {
                      name: "href",
                      type: "url",
                      title: "URL",
                    },
                  ],
                },
              ],
            },
          },
          {
            type: "image",
            options: { hotspot: true },
            fields: [
              {
                name: "alt",
                type: "string",
                title: "Alt text",
              },
            ],
          },
        ]
      }
    ]
  }
  
  export default blog;