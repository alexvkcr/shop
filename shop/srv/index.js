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
    let item = { id: 0, name: '', description: '', allergens: [], price: '', img: '' }
    let items = []
    items.push(Object.assign({}, item, { id: 1, name: 'Bollito', description: 'de Crema', allergens: ['Gluten'], price: 30, img: 'img/palmera.jpg' }))
    items.push(Object.assign({}, item, { id: 2, name: 'Palmera', description: 'de Chocolate', allergens: ['Gluten'], price: 30, img: 'img/palmera.jpg' }))
    items.push(Object.assign({}, item, { id: 3, name: 'Palmera', description: 'de Nata', allergens: ['Gluten', 'Leche'], price: 30, img: 'img/palmera.jpg' }))
    items.push(Object.assign({}, item, { id: 4, name: 'Palmera', description: 'de chocolate', allergens: ['Gluten'], price: 30, img: 'img/palmera.jpg' }))
    items.push(Object.assign({}, item, { id: 5, name: 'Palmera', description: 'de chocolate', allergens: ['Gluten'], price: 30, img: 'img/palmera.jpg' }))
    items.push(Object.assign({}, item, { id: 6, name: 'Palmera', description: 'de chocolate', allergens: ['Gluten'], price: 30, img: 'img/palmera.jpg' }))
    items.push(Object.assign({}, item, { id: 7, name: 'Palmera', description: 'de chocolate', allergens: ['Gluten'], price: 30, img: 'img/palmera.jpg' }))
    items.push(Object.assign({}, item, { id: 8, name: 'Palmera', description: 'de chocolate', allergens: ['Gluten'], price: 30, img: 'img/palmera.jpg' }))
    items.push(Object.assign({}, item, { id: 9, name: 'Palmera', description: 'de chocolate', allergens: ['Gluten'], price: 30, img: 'img/palmera.jpg' }))
    items.push(Object.assign({}, item, { id: 10, name: 'Palmera', description: 'de chocolate', allergens: ['Gluten'], price: 30, img: 'img/palmera.jpg' }))
    items.push(Object.assign({}, item, { id: 11, name: 'Palmera', description: 'de chocolate', allergens: ['Gluten'], price: 30, img: 'img/palmera.jpg' }))
    items.push(Object.assign({}, item, { id: 12, name: 'Palmera', description: 'de chocolate', allergens: ['Gluten'], price: 30, img: 'img/palmera.jpg' }))
    items.push(Object.assign({}, item, { id: 13, name: 'Palmera', description: 'de chocolate', allergens: ['Gluten'], price: 30, img: 'img/palmera.jpg' }))
    items.push(Object.assign({}, item, { id: 14, name: 'Palmera', description: 'de chocolate', allergens: ['Gluten'], price: 30, img: 'img/palmera.jpg' }))
    items.push(Object.assign({}, item, { id: 15, name: 'Palmera', description: 'de chocolate', allergens: ['Gluten'], price: 30, img: 'img/palmera.jpg' }))
    items.push(Object.assign({}, item, { id: 16, name: 'Palmera', description: 'de chocolate', allergens: ['Gluten'], price: 30, img: 'img/palmera.jpg' }))
    items.push(Object.assign({}, item, { id: 17, name: 'Palmera', description: 'de chocolate', allergens: ['Gluten'], price: 30, img: 'img/palmera.jpg' }))
    items.push(Object.assign({}, item, { id: 18, name: 'Palmera', description: 'de chocolate', allergens: ['Gluten'], price: 30, img: 'img/palmera.jpg' }))
    return items
}