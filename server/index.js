const express = require("express");
const connection = require('./db')
const ProductSchema = require("./models/ProductSchema")
require("dotenv").config();
const app = express();
const PORT = process.env.PORT

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send("GET Product List here")
})

app.post('/',(req,res)=>{
    res.send("POST Product List here")
})

app.get("/products", async (req, res) => {
    const products = await ProductSchema.find()
    res.send(products)
})
 
app.post("/products/prod", async (req, res) => {
    const product = await new ProductSchema(req.body)
    await product.save();
    res.send(product)
})

app.listen(PORT,async()=>{
    await connection;
    console.log(`http://localhost:${4000}`)
})
