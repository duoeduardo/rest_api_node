//Modelo
//Modelos se encargan de los datos.
//Funciones para obtener crear, actualizar o eliminar datos
const products = require("../data/products.json");
const { v4: uuidv4 } = require("uuid");
const { writeDataToFile } = require("../util");

function findAll() {
  return new Promise((resolve, rejected) => {
    resolve(products);
  });
}

function findById(id) {
  return new Promise((resolve, rejected) => {
    const product = products.find((p) => p.id === id);
    resolve(product);
  });
}

function create(product) {
  return new Promise((resolve, rejected) => {
    const newProduct = { id: uuidv4(), ...product };
    products.push(newProduct);
    writeDataToFile("./data/products.json", products);
    resolve(newProduct);
  });
}

module.exports = {
  findAll,
  findById,
  create,
};
