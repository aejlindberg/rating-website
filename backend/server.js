import mongoose from "mongoose"
import bodyParser from "body-parser"
import express from "express"
import cors from "cors"

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors())

const mongoServer = "mongodb://localhost/sprint5DB"

mongoose.connect(mongoServer, { useNewUrlParser: true })
mongoose.Promise = Promise

mongoose.connection.on("error", err => console.error("Connection error:", err))
mongoose.connection.once("open", () => console.log("Connected to mongodb"))

const Product = mongoose.model("Product", {
  productID: Number,
  sellerID: String,
  title: String,
  description: String,
  price: Number,
  image: String,
  category: String,
  rating: Number
})

app.get("/", (req, res) => {
  res.send("Team 1 API")
})

app.get("/products/", (req, res) => {
  Product.find().then(products => {
    res.json(products)
  })
})

app.post("/products/", (req, res) => {
  const product = new Product(req.body)
  console.log("Body: ", req.body)

  product.save()
    .then(() => { res.status(201).send("Product created") })
    .catch(err => { res.status(400).send(err) })
})

app.put("/products/:objectID", (req, res) => {
  Product.findById(req.params.objectID, function(err, product) {
    if (err) res.send(err)

    product.rating = 5

    product.save(function(err) {
      if(err) res.send(err)

      res.json({ message: "Rating updating!" })
    })
  })
})



app.listen(8081, () => console.log("Team 1 API listening on port 8081!"))
