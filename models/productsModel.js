//Modelo
//Modelos se encargan de los datos.
//Funciones para obtener crear, actualizar o eliminar datos
const products = require("../data/products.json");

function findAll() {
  return new Promise((resolve, rejected) => {
    resolve(products);
  });
}

function findById(id) {
    return new Promise((resolve, rejected) => {
        const product = products.find((p) =>p.id === id)
      resolve(product);
    });
  }

module.exports = {
  findAll,
  findById
};
