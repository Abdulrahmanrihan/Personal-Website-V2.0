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
        of: [{ type: "block" }]
      }
    ]
  }
  
  export default blog;