const express = require("express");
const http=require('http')
const app = express();
const PORT = process.env.PORT || 30010;
const path = require("path");



// please start server then control terminal
var date = new Date();
var current_hour = date.getHours();
var current_minutes = date.getMinutes();
(current_minutes<10)?current_minutes=`0${current_minutes}`:current_minutes=`${current_minutes}`;
console.log(`heure=${current_hour}:${current_minutes}`);
var JOURS=["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
var current_date = date.getDay();
console.log('jour=',JOURS[current_date]);
let HDM=Boolean;
let HFM=Boolean;
let HDAM=Boolean;
let HFAM=Boolean;
let JLundi=Boolean;
let JVendredi=Boolean;
let F=Boolean;
//debut 8h matin
(current_hour=>8)? HDM=true: HDM=false;
//fin 12h matin
(current_hour<12)? HFM=true: HFM=false;
//fin 19h
(current_hour=>14)? HDAM=true: HDAM=false;
//fin 18h
(current_hour<18)? HFAM=true: HFAM=false;
//debut lundi
(current_date>0)? JLundi=true: JLundi=false;
//din vendredi
console.log('matin',(HDM && HFM));
(current_date<6)? JVendredi=true: JVendredi=false;
//dans les normes?
console.log('apres midi',(HDAM && HFAM))
console.log('dans les heures de travail',((HDM && HFM) || (HDAM && HFAM)))
console.log('dans les jours de travail',(JLundi && JVendredi))
F=(((HDM && HFM) || (HDAM && HFAM))&&(JLundi && JVendredi))
console.log('dans les normes=',F)

F===true?
app.listen(PORT, (current_hour)=>{
  console.log(`server is closed `)
app.use(express.static(path.join(__dirname, "/public/publicServerClosed")));
app.get("/",(req,res)=>res.sendFile(path.join(__dirname,"/public/publicServerClosed","ClosedServer.html")))

})
  :app.listen(PORT, (current_hour)=>{
    console.log(`server is runing http://localhost:${PORT}/`)
app.use(express.static(path.join(__dirname, "/public/publicServerOpen")));
app.get("/",(req,res)=>res.sendFile(path.join(__dirname,"/public/publicServerOpen","Home.html")))
  })