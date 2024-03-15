import express from 'express';

const app = express()
const port = 3000

app.set('view engine', 'ejs')

const item = [
    {name:'Flower Blanket', details:'Discover our cozy flower blanket, handcrafted with soft yarn in beautiful colors.', size:'15 in * 15 in',yarn:'xxxx'},
    {name:'Carrot Toy', details:'Handcrafted with soft yarn in beautiful colors. Looks like real carrot.', size:'10 in * 6 in',yarn:'ttxx'},
]

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

app.get('/items/:id', (req, res) => {
    const itemId = req.params.id;
    const selectedItem = item[itemId];
    res.render('pages/items', { item: selectedItem });
});

app.listen(port, () => {
  console.log(`App listening at port ${port}`)
})