const notFound = (req, res) => {
    res.status(500).send("Not found")
}

module.exports=notFound