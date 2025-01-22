const express = require("express");

const app = express();
app.use(express.json());

console.log("Run");

app.get("/", (req,res)=>{
    res.json({message: "Hii from backend b server"});
  });


const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Server running on ${port}`));