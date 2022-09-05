const {Schema, model} = require("mongoose");

const productSchemaHere = Schema({
    name: String,
    price: Number

})

const ProductSchema = model("product", productSchemaHere);
module.exports = ProductSchema;

