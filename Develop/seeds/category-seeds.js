const { Category } = require('../models');

const categoryData = [
  // filling in columns with strings
  {
    category_name: 'Shirts',
  },
  {
    category_name: 'Shorts',
  },
  {
    category_name: 'Music',
  },
  {
    category_name: 'Hats',
  },
  {
    category_name: 'Shoes',
  },
];

//bulkCreate allows to fill in columns in the back end
const seedCategories = () => Category.bulkCreate(categoryData);

//exporting seedCategories
module.exports = seedCategories;
