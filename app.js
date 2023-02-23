const express=require("express")
const app=express();
require("dotenv").config();
const notFound=require("./middleware/notFound");
const handleErrors=require("./middleware/handleErrors");


app.use(express.json());

const port=process.env.PORT || 3000

app.get("/", (req, res)=> {
res.status(200).send("<h1>Store API</h1><a href='/api/v1/products'>Products</a>")
})

const start = async () => {
    //connect DB
    app.listen(port, console.log(`Server is listening at port ${port}`))
}

start()