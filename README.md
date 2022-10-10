# Project Title: Ecommerce Back End

## Description
This code allows the employee of an e-commerce store to look through all of the products inside. The user can search by product, tag, or category. If the user specifically knows the product number, tag number, or the category number of what they are looking for, then they can do a quick search on insomnia via the number. If the user would like to change up some information related to the product, category, or tag they can easily update the information with respect to the id. Lastly the user can discard of any information or the category, product, or tag using the corresponding id.

## Usage
To use this app, please run 'source schema.sql' inside the mysql, run 'npm run seed' to reset all information, and lastly you can run the app using 'npm start'.

Category Routes:
* GET http://localhost:3001/api/categories/
* GET http://localhost:3001/api/categories/:id
* POST http://localhost:3001/api/categories
* PUT http://localhost:3001/api/categories/:id
* DELETE http://localhost:3001/api/categories/:id

Product Routes:
* GET http://localhost:3001/api/products/
* GET http://localhost:3001/api/products/:id
* POST http://localhost:3001/api/products
* PUT http://localhost:3001/api/products/:id
* DELETE http://localhost:3001/api/products/:id

Tag Routes:
* GET http://localhost:3001/api/tags/
* GET http://localhost:3001/api/tags/:id
* POST http://localhost:3001/api/tags
* PUT http://localhost:3001/api/tags/:id
* DELETE http://localhost:3001/api/tags/:id

## Walkthrough Video Link
https://drive.google.com/file/d/1Fs0DW6jr3c3XCG9qQ17wtkzJFlyh9flE/view 
