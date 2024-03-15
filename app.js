import express from 'express';

const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    var categories = [
        {name:'Animal', img:'1'},
        {name:'Flower', img:'2'},
        {name:'Character', img:'3'},
        {name:'Cardigan', img:'4'},
    ];
    var tagline = "Discover the finest crochet products"
    res.render('pages/index',{
        categories:categories,
        tagline:tagline
    })
})

app.get('/items', (req, res) => {
    res.render('pages/items')
})
app.listen(port, () => {
  console.log(`App listening at port ${port}`)
})