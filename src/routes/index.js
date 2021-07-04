const express = require('express');
const router = express.Router();
const Menu = require('../model/menu');



router.get('/', async(req, res) => {
    res.render('index');
})



router.get('/addFoodPlates', async(req, res) => {
    res.render('addFoodPlates');
})

router.post('/addFoodPlate', async(req, res, next) => {
    const menu = new Menu(req.body);
    await menu.save();
    res.redirect('/ourLetter');
})

router.get('/editFoodPlate/:id', async(req, res, next) => {
    const menu = await Menu.findById(req.params.id);
    console.log(menu);
    res.render('edit', {
        menu
    });
})

router.get('/ourLetter', async(req, res) => {
    const menu = await Menu.find();
    res.render('ourLetter', {
        menu
    });
});

router.get('/statusFoodPlate/:id', async(req, res, next) => {
    let {id} = req.params;
    const menu = await Menu.findById(id);
    menu.available = !menu.available;
    await menu.save();
    res.redirect('/ourLetter');
})




router.post('/editFoodPlates/:id', async(req, res, next) => {
    const {id} = req.params;
    await Menu.update({_id:id}, req.body);
    res.redirect('/ourLetter');
})

router.get('/deleteFoodPlate/:id', async(req, res, next) => {
    let {id} = req.params;
    await Menu.remove({_id:id});
    res.redirect('/ourLetter');
    
})

module.exports = router;