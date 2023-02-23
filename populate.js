require("dotenv").config()

const connectDB=require("./connectDB")
const Product=require("./model/product")
const jsonProducts=require("./products.json")

const start = async () => {
    try {
       await connectDB(process.env.MONGO_URI) 
       await Product.insertMany(jsonProducts);
       console.log("Success")
    } catch (error) {
        console.log(error)
    }
}

start()