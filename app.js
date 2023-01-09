let express = require('express');
let bodyParser = require('body-parser');
let app = express();

const itemList = ['Bootcamp', 'Digital Marketing']

app.use(bodyParser.urlencoded({ extended:"true"}));

app.set('view engine', 'ejs');
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index', {list: itemList});
});

app.post('/',(req,res)=>{
    const item = req.body.newTask;
    itemList.push(item);
    res.redirect('/')
})

app.listen(3000,()=>{
    console.log('Listening on port 3000')
})
