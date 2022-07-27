export default {
  name: "restaurant",
  title: "Restaurante",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Nome do Restaurante",
      validation: (Rule) => Rule.required(),
    },

    {
      name: "short_description",
      type: "string",
      title: "Descrição do Restaurante",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "image",
      type: "image",
      title: "Imagem do restaurante",
    },

    {
      name: "long",
      type: "number",
      title: "Longitude do restaurante",
    },
    {
      name: "address",
      type: "string",
      title: "Endereço do Restaurante",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "rating",
      type: "number",
      title: "Rating do restaurante(1-5 estrelas)",
      validation: (Rule) =>
        Rule.required().min(1).max(5).error("por favor selecione entre 1 e 5"),
    },
    {
      name: "type",
      title: "Category",
      validation: (Rule) => Rule.required(),
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      name: "dishes",
      type: "array",
      title: "Adicionais",
      of: [{ type: "reference", to: [{ type: "dish" }] }],
    },
  ],
};
