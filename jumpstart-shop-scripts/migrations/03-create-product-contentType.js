module.exports = function (migration) {
  const product = migration
    .createContentType("product")
    .name("Product")
    .description("")
    .displayField("title");
  product
    .createField("internalName")
    .name("Internal Name")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  product
    .createField("title")
    .name("Title")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([
      {
        unique: true,
      },
    ])
    .disabled(false)
    .omitted(false);

  product
    .createField("slug")
    .name("Slug")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  product
    .createField("description")
    .name("Description")
    .type("RichText")
    .localized(false)
    .required(false)
    .validations([
      {
        enabledNodeTypes: ["heading-1", "hyperlink", "ordered-list"],
      },
      {
        enabledMarks: ["bold", "italic", "underline"],
      },
    ])
    .disabled(false)
    .omitted(false);

  product
    .createField("categories")
    .name("Categories")
    .type("Array")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .items({
      type: "Link",
      validations: [],
      linkType: "Entry",
    });

  product
    .createField("price")
    .name("Price")
    .type("Number")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  product
    .createField("image")
    .name("Image")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .linkType("Asset");
  product.changeFieldControl("internalName", "builtin", "singleLine", {});
  product.changeFieldControl("title", "builtin", "singleLine", {});
  product.changeFieldControl("slug", "builting", "slugEditor", {});
  product.changeFieldControl("description", "builtin", "richTextEditor", {});
  product.changeFieldControl("categories", "builtin", "entryLinksEditor", {});
  product.changeFieldControl("price", "builtin", "numberEditor", {});
  product.changeFieldControl("image", "builtin", "assetLinkEditor", {});
};
