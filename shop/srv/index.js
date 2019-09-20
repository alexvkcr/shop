import express from 'express';

export default (app, http) => {
 app.use(express.json());
 
 //GET
 app.get('/foo', (req, res) => {
   res.json({msg: 'foo'});
 });

 
 app.get('/items', (req, res) => {
  res.json({msg: getItems()});
});

 //POST
 app.post('/bar', (req, res) => {
   res.json(req.body);
 });
}

function getItems(){
  let item = {id:0, name: '', description:'', price:''} 
  let items =[]
  items.push(Object.assign({},item,{id:1, name: 'Bollito', description:'de Crema', price:30}))
  items.push(Object.assign({},item,{id:2, name: 'Palmera', description:'de chocolate', price:30}))
  return items
}