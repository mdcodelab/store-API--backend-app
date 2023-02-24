const Product = require("../model/product")

const getAllProductsStatic = async (req, res) => {
    //const search='ab';
    //const products = await Product.find({featured: true})
    // const products = await Product.find({
    //     name: {$regex: search, $options: "i"}
    // })
    //throw new Error("testing async errors")
    let products= await Product.find({}).sort("-name price")
    res.status(200).json({products, hbHits: products.length})
}

const getAllProducts = async (req, res) => {
    const {featured, company, name}=req.query
    let myObj={}
    if (featured) {
        myObj.featured = featured === "true" ? true : false
    }

    if(company){
        myObj.company=company
    }

    if(name) {
        myObj.name={$regex: name, $options: "i"}
    }

    console.log(myObj)
    const products = await Product.find(myObj)
    res.status(200).json({products, nbHits: products.length})
}


module.exports={getAllProductsStatic, getAllProducts}