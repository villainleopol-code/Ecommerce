const express = require("express")
const app = express()

app.use(express.json())

let products = [
 {id:1,name:"Laptop",price:1200},
 {id:2,name:"Phone",price:800}
]

app.get("/products",(req,res)=>{
 res.json(products)
})

app.post("/review",(req,res)=>{
 const review = req.body.review

 const html = `
   <html>
     <body>
       <h1>User review</h1>
       <p>${review}</p>
     </body>
   </html>
 `

 res.send(html)
})

app.listen(3000,()=>{
 console.log("Ecommerce API running")
})
