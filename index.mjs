import express from 'express';
import fs from 'fs'
import path from 'path'

const app = express();
const port = 7070

app.use(express.static('public'))

app.get('/',(req,res)=>{    
    res.send("woy kiell!!")
})  

const readData = () => {
    const data = fs.readFileSync('quotes.json', 'utf8');
    return JSON.parse(data);
};

app.get('/quotes',(req,res)=>{
    const quotes = readData();
    res.header("Access-Control-Allow-Origin", "*");
    res.json(quotes);
})
app.get('/quotes/random',(req,res)=>{
    const quotes = readData();
    const random = Math.floor(Math.random() * quotes.length);
    res.header("Access-Control-Allow-Origin", "*");
    res.send(quotes[random])
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})