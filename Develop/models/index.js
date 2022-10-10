// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  //foreignkey connects 2 models
  foreignKey: 'category_id',
});

// Categories have many Products
Category.hasMany(Product, {
  //Same connection describing both sides
  foreignKey: 'category_id',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  //connects Product model to ProductTag
  foreignKey: 'product_id',
  through: {
    //middle man that connects 2 different models
    model: ProductTag,
  },
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  //Tag connects to Product through ProductTag and references tag_id
  foreignKey: 'tag_id',
  through: {
    //middle man that connects 2 different models
    model: ProductTag,
  },
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
