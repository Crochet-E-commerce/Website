import express from 'express';

const app = express()
const port = 3000

app.set('view engine', 'ejs')

const item = [
    {name:'Flower Blanket', details:'Discover our cozy flower blanket, handcrafted with soft yarn in beautiful colors.', size:'15 in * 15 in',yarn:'xxxx', category:'other'},
    {name:'Lemon', details:'Handcrafted with soft yarn in beautiful colors. Looks like real lemon.', size:'10 in * 6 in',yarn:'ttxx', category:'fruit'},
    {name:'Strawberry', details:'Handcrafted with soft yarn in beautiful colors. Looks like real lemon.', size:'10 in * 6 in',yarn:'ttxx', category:'fruit'},
];

const categories = [
    {name:'All',img:'0'},
    {name:'Animal', img:'1'},
    {name:'Flower', img:'2'},
    {name:'Fruit', img:'3'},
    {name:'Character', img:'4'},
    {name:'Cardigan', img:'5'},
];

app.get('/', (req, res) => {
    var tagline = "Discover the finest crochet products"
    res.render('pages/index',{
        categories:categories,
        tagline:tagline
    })
})

app.get('/items/:name', (req, res) => {
    const itemName = req.params.name;
    const selectedItem = item.find(item => item.name === itemName)
    res.render('pages/items', { item: selectedItem });
});

app.get('/shop/:id', (req, res) => {
    const shopId = req.params.id;
    const selectedShop = categories[shopId];
    res.render('pages/shop', { 
        shop: selectedShop,
        item:item
     });
});

app.listen(port, () => {
  console.log(`App listening at port ${port}`)
})