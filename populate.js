require("dotenv").config()

const connectDB=require("./connectDB")
const Product=require("./model/product")
const jsonProducts=require("./products.json")

const start = async () => {
    try {
       await connectDB(process.env.MONGO_URI) 
       await Product.deleteMany();
       await Product.create(jsonProducts);  //or
       //await Product.insertMany(jsonProducts);
       console.log("Success")
       process.exit(0)
    } catch (error) {
        process.exit(1)
    }
}

start()