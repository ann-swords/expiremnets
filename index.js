const express = require("express");
const app = express();
const PORT = 3000;
const axios = require("axios");

//Initilaize Express Layouts BEFORE THE ROUTES!!!!
// const expressLayouts = require('express-ejs-layouts')
// //Look into views folder for a file with a name layout.js
// app.use(expressLayouts)
app.set("view engine", "ejs")


let name = 'wind-breaker'
const options = {
    method: 'GET',
    url: `https://manga-scrapper.p.rapidapi.com/series/${name}/chapters/`,
    params: {provider: 'luminous'},
    headers: {
      'X-RapidAPI-Key': '26fdfb2d4cmsh3537a57e6821e2dp1a2730jsn3164237c1aef',
      'X-RapidAPI-Host': 'manga-scrapper.p.rapidapi.com'
    }
  };

app.get('/', (req,res)=>{
    axios.request(options)
    .then(function (response) {
        let manga = response.data.data.series 
        // console.log(manga);
        res.send(manga)
        res.render('home', {manga})
        // console.log(manga.ChapterUrl)
    })
    .catch(function (error) {
        console.error(error);
    });
    
})



app.listen(PORT, () => {
  console.log("Listening on PORT:" + PORT);
});