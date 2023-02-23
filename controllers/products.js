const Product = require("../model/product")

const getAllProductsStatic = async (req, res) => {
    const products = await Product.find({featured: true})
    //throw new Error("testing async errors")
    res.status(200).json({products, nmbHits: products.length})
}

const getAllProducts = async (req, res) => {
    res.status(200).json({msg: "Products route"})
}

module.exports={getAllProductsStatic, getAllProducts}