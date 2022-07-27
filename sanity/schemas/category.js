export default {
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "category name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      type: "image",
      title: "Imagem da categoria",
    },
  ],
};
