import express from 'express';
import cors from 'cors';

export default (app, http) => {
    app.use(express.json());
    app.use(cors())

    //GET
    app.get('/foo', (req, res) => {
        res.json({ msg: 'foo' });
    });


    app.get('/items', (req, res) => {
        res.json({ msg: getItems() });
    });

    //POST
    app.post('/bar', (req, res) => {
        res.json(req.body);
    });
}

function getItems() {
    let item = { id: 0, name: '', description: '', allergens: [], price: '' }
    let items = []
    items.push(Object.assign({}, item, { id: 1, name: 'Bollito', description: 'de Crema', allergens: ['Gluten'], price: 30 }))
    items.push(Object.assign({}, item, { id: 2, name: 'Palmera', description: 'de chocolate', allergens: ['Gluten'], price: 30 }))
    return items
}