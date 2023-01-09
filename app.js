let express = require('express');
let bodyParser = require('body-parser');
let app = express();

const itemList = ['Bootcamp', 'Digital Marketing']
const workList =['work','work']
let listTitle=''

app.use(bodyParser.urlencoded({ extended:"true"}));

app.set('view engine', 'ejs');
app.use(express.static('public'))

app.get('/', (req, res) => {

      listTitle ='Home'
    res.render('index', {
        titlek:listTitle,
        list: itemList
    });
});

app.get('/work',(req,res)=>{
     listTitle = 'work';
    res.render('index',{
        titlek:listTitle,
        list: workList
    })
})

app.post('/',(req,res)=>{
    if(req.body.btn === 'Home'){
        const item = req.body.newTask;
        itemList.push(item);
        res.redirect('/')
    }else{
        const item = req.body.newTask;
        workList.push(item);
        res.redirect('/work')
    }
    
})

app.listen(3000,()=>{
    console.log('Listening on port 3000')
})
