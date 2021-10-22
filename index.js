const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const connection = require("./database/database")

const categoriesController = require("./categories/CategoriesController")
const articlesController = require("./articles/articlesController")

const Article = require("./articles/Article")
const Category = require("./categories/Category")

//view engine
app.set("view engine", "ejs")

//BodyParse
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Static
app.use(express.static('public'))

//dataBase
connection
    .authenticate()
    .then(()=>{
        console.log("Conexão feita com sucesso")
    })
    .catch((error)=>{
        console.log(error)
    })

app.use("/", categoriesController)
app.use("/", articlesController )

app.get("/", (req,res)=>{
    res.render("index")
})

app.listen(8080, () => {
    console.log("O servidor esta rodando")
})