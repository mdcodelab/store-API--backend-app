const Product = require("../model/product")

const getAllProductsStatic = async (req, res) => {
    const products = await Product.find({featured: true})
    //throw new Error("testing async errors")
    res.status(200).json({Products, hbHits: products.length})
}

const getAllProducts = async (req, res) => {
    console.log(req.query)
    const products = await Product.find(req.query)
    res.status(200).json({products, nbHits: products.length})
}

module.exports={getAllProductsStatic, getAllProducts}