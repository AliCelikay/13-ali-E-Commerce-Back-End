//Packages
//3rd party package
const router = require('express').Router();
//Built in package from models
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// /api/categories/
router.get('/', async (req, res) => {
  // find all categories
  try{
    const categoryData = await Category.findAll({
      // be sure to include its associated Products
      include: [Product],
    });
    res.status(200).json(categoryData);
  }
  catch(err){
    res.status(500).json(err);
  }
});

// /api/categories/:id
router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try{
    // id is in the url therefore params needed to grab the url input
    const categoryData = await Category.findByPk(req.params.id, {
      // be sure to include its associated Products
      include: [Product],
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }
   
    res.status(200).json(categoryData);
  }
  catch(err){
    res.status(500).json(err);
  }
});

// /api/categories/
router.post('/', async (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } 
  catch (err) {
    res.status(400).json(err);
  }
});

// /api/categories/:id
router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    // what to update with
    const categoryData = await Category.update(req.body, {
      //where to update from params grab id
      where: {id: req.params.id}
    });

  if (!categoryData) {
    res.status(404).json({ message: 'No category found with this id!' });
    return;
  }

    res.status(200).json(categoryData);
  } 
  catch (err) {
    res.status(500).json(err);
  }
});

// /api/categories/:id
router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(categoryData);
  } 
  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
