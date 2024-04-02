import express from 'express';
import pg from "pg";
import categories from "./data/categories.json" assert { type: 'json' };

const app = express()
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }));
app.use(express.static('images'));
//middleware
const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "items",
    password: "Wonderboy",
    port: 5432,
  });

  db.connect()
    .then(() => console.log('Database connected'))
    .catch(err => console.error('Error connecting to database', err));

  app.use(async (req, res, next) => {
    try {
        const result = await db.query('SELECT * FROM products');
        req.products = result.rows;
        next();
    } catch (err) {
        next(err);
    }
});
//

app.get('/', (req, res) => {
    var tagline = "Discover the finest crochet products"
    res.render('pages/index',{
        categories:categories,
        tagline:tagline,
        item:req.products
    })
})

app.get('/items/:name', (req, res) => {
    const itemName = req.params.name;
    const selectedItem = req.products.find(item => item.name === itemName)
    res.render('pages/items', { item: selectedItem });
});

app.get('/shop/:id', (req, res) => {
    const shopId = req.params.id;
    const selectedShop = categories[shopId];
    res.render('pages/shop', { 
        shop: selectedShop,
        item:req.products
     });
});

app.listen(port, () => {
  console.log(`App listening at port ${port}`)
})