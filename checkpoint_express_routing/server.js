const express = require("express");
const app = express();
const path = require("path") 
const PORT = process.env.PORT || 3000;
app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`server is runing on http://localhost:${PORT}/`)
);
// style
app.use(express.static(path.join(__dirname, "/public/")));
// Home server
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','Home.html'))
})
// service server 
app.get('/OurServices',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','OurServices.html'))
})
// Contact server
app.get('/ContactUs',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','ContactUs.html'))
})
app.get('/t',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','NavBar.html'))
})   