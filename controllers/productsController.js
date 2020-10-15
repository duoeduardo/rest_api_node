//Controlador
//Controlar lo que hacen las rutas, el estado que envia, que retorna.
//Interactua con el modelo.
const Product = require("../models/productsModel");

//@desc Obtiene todo los productos
//@Route GET /api/products
async function getProducts(req, res) {
  try {
    const products = await Product.findAll();

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(products));
  } catch (error) {
    console.log(error);
  }
}

//@desc Obtiene uno de los productos
//@Route GET /api/products/:id
async function getProduct(req, res, id) {
    try {
      const product = await Product.findById(id);
  
        if (!product) {
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(JSON.stringify({message: 'Product Not Found'}));
        } else {
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(product));
        }

      
    } catch (error) {
      console.log(error);
    }
  }

module.exports = {
  getProducts,
  getProduct
};