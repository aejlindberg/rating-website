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
  // productID: Number,
  email: String,
  title: String,
  description: String,
  price: Number,
  image: String,
  category: String,
  rating: Number,
  nrOfVotes: Number,
  productId: Number
})

app.get("/", (req, res) => {
  res.send("Team 1 API")
})

app.get("/products/", (req, res) => {
  const options = {}
  if (req.query.category) {
  options.category = req.query.category
}
  Product.find(options).then(products => {
    res.json(products)
  })
})


app.get("/products/:objectID", (req, res) => {
  Product.findById(req.params.objectID, function(err, product) {
    if (err) res.send(err)
    res.json(product)
  })
})

app.post("/products/", (req, res) => {
  const product = new Product(req.body)
  console.log("Body: ", req.body)

  product.nrOfVotes = 0
  product.rating = 0
  product.productId = Date.now()

  product.save()
    .then(() => { res.status(201).send("Product created") })
    .catch(err => { res.status(400).send(err) })
})

app.put("/products/:objectID", (req, res) => {
  Product.findById(req.params.objectID, function(err, product) {
    if (err) res.send(err)

    product.rating = req.body.rating
    product.nrOfVotes++
    console.log(product)

    product.save(function(err) {
      if(err) res.send(err)

      res.json({ message: "Rating updating!" })
    })
  })
})

// const products = [
//   new Product({ title: "Ringo's Glasses", email: "ringo@beatles.com", description: "Ringo's favorite glasses circa 2009", price: 43, image:"", category:"clothing", rating:0, nrOfVotes: 0 }),
//   new Product({ title: "Lennon's Sneakers", email: "koko@beatles.com", description: "Jon's running shoes", price: 60, image:"", category:"shoes", rating:0, nrOfVotes: 0 }),
//   new Product({ title: "Paul's Jacket", email: "paul@beatles.com", description: "Paul's jacket worn during Woodstock", price: 25, image:"", category:"clothing", rating:0, nrOfVotes: 0 }),
//   new Product({ title: "George's Watch", email: "harrison@beatles.com", description: "George's despicably charming watch", price: 231, image:"", category:"clothing", rating:0, nrOfVotes: 0 }),
//   new Product({ title: "Koko's Scarf", email: "kok@beatles.com", description: "Do you really care?", price: 1, image:"", category:"clothing", rating:0, nrOfVotes: 0 }),
//   new Product({ title: "Ozzy's leather pants", email: "crazytrain@osborne.com", description: "Beer encrusted leather pants", price: 342, image:"", category:"clothing", rating:0, nrOfVotes: 0 }),
//   new Product({ title: "Riahanna's umbrella", email: "rhianna@rhianna.com", description: "The umbrella from the music video", price: 209, image:"", category:"clothing", rating:0, nrOfVotes: 0 }),
//   new Product({ title: "Running out of titles", email: "ringo@beatles.com", description: "No idea what should go here at this point", price: 3234, image:"", category:"clothing", rating:0, nrOfVotes: 0 }),
//   new Product({ title: "Mick's lip gloss", email: "jagger@stones.com", description: "Jagger's strawberry lip balm", price: 1, image:"", category:"shoes", rating:0, nrOfVotes: 0 }),
//   new Product({ title: "Keith's favorite bottle of jack", email: "keith@stones.com", description: "Keith's smuggled bottle of whiskey out of Tennessee", price: 34, image:"", category:"clothing", rating:0, nrOfVotes: 0 }),
//   new Product({ title: "Ronnie's sax reed", email: "ronnie@stones.com", description: "Ronnie's favorite set of reeds", price: 5, image:"", category:"clothing", rating:0, nrOfVotes: 0 }),
//   new Product({ title: "Charlie's favorite brass knuckles", email: "watts@stones.com", description: "The knuckles that Charlie wish he had when knocking Jagger out", price: 23, image:"", category:"clothing", rating:0, nrOfVotes: 0 }),
//   new Product({ title: "Wyman's funny looking gloves", email: "wyman@stones.com", description: "Wyman's gloves. Nuff said. ", price: 4534, image:"", category:"bears", rating:0, nrOfVotes: 0 }),
//   new Product({ title: "The Who's collective socks from 1982", email: "who@who.com", description: "Who's socks from the who your", price: 34, image:"", category:"clothing", rating:0, nrOfVotes: 0 }),
//   new Product({ title: "The Door's collective doors from 1976", email: "door@doors.com", description: "Why would you need this?", price: 453, image:"", category:"clothing", rating:0, nrOfVotes: 0 }),
//   new Product({ title: "Elton John's piano cover", email: "elton@john.com", description: "Elton John's piano cover from his childhood", price: 43, image:"", category:"clothing", rating:0, nrOfVotes: 0 }),
//   new Product({ title: "Some really interesting thing", email: "ringo@beatles.com", description: "Fast description", price: 453421, image:"", category:"clothing", rating:0, nrOfVotes: 0 }),
//   new Product({ title: "2pac's chain necklace", email: "2pac@2pac.com", description: "California love", price: 432, image:"", category:"clothing", rating:0, nrOfVotes: 0 }),
//   new Product({ title: "Eminem's track suit", email: "marshal@mathers.com", description: "2 trailer park girls go round the outside", price: 3243, image:"", category:"clothing", rating:0, nrOfVotes: 0 }),
//
// ]
//
// products.forEach(product => {
//   product.save().then(() => { console.log("Created", product.title )})
// })


app.listen(8081, () => console.log("Team 1 API listening on port 8081!"))
