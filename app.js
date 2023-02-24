const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

let app = express();


app.use(bodyParser.urlencoded({ extended:"true"}));

app.set('view engine', 'ejs');
app.use(express.static('public'))


mongoose.set('strictQuery',true)
mongoose.connect("mongodb://localhost:27017/todoDb")

const todoSchema = new mongoose.Schema({
    name: String,
})

const List = mongoose.model('item',todoSchema);

const item1 = new List({
    name:'Wann a add to a database'});
const item2 = new List({
    name:'Hello all'});

const defaultList = [item1, item2]

// 

app.get('/', (req, res) => {

      listTitle ='Home'
    res.render('index', {
        titlek:'Home',
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
