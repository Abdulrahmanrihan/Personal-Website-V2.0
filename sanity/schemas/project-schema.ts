const project = {
  name: "project",
  title: "Projects",
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
      options: { source: "name" },
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
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
      ],
    },
    {
      name: "url",
      title: "URL",
      type: "url",
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Web Development",   value: "Web Development" },
          { title: "Full-Stack",        value: "Full-Stack" },
          { title: "Machine Learning",  value: "Machine Learning" },
          { title: "Computer Vision",   value: "Computer Vision" },
          { title: "NLP & RAG",         value: "NLP & RAG" },
          { title: "Data Engineering",  value: "Data Engineering" },
          { title: "DevOps & Cloud",    value: "DevOps & Cloud" },
          { title: "Python",            value: "Python" },
          { title: "Mobile Development", value: "Mobile Development" },
          { title: "Flutter",           value: "Flutter" },
          { title: "Game Development",  value: "Game Development" },
          { title: "Unity 3D",          value: "Unity 3D" },
          { title: "Other",             value: "Other" },
        ],
      },
    },
    {
      name: "year",
      title: "Year",
      type: "number",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal",     value: "normal" },
            { title: "Heading 2",  value: "h2" },
            { title: "Heading 3",  value: "h3" },
          ],
          marks: {
            decorators: [
              { title: "Bold",      value: "strong" },
              { title: "Italic",    value: "em" },
              { title: "Code",      value: "code" },
            ],
          },
        },
      ],
    },
  ],
}

export default project;
