const express=require("express")
const app=express();
require("dotenv").config();
const notFound=require("./middleware/notFound");
const handleErrors=require("./middleware/handleErrors")
const connectDB=require('./connectDB');



app.use(express.json());

const port=process.env.PORT || 3000

app.get("/", (req, res)=> {
res.status(200).send("<h1>Store API</h1><a href='/api/v1/products'>Products</a>")
})

const productsRouter=require("./routes/products");
app.use("/api/v1/products", productsRouter)

app.use(notFound);
app.use(handleErrors);

const start = async () => {
    //connect DB
    await connectDB(process.env.MONGO_URI)
    console.log("DB connected")
    app.listen(port, console.log(`Server is listening at port ${port}`))
}

start()