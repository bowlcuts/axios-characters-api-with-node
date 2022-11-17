const router = require("express").Router();
const axios = require("axios");

const Character = require('../models/character.model');

/* GET home page */
router.get("/characters", (req, res, next) => {
    axios.get("https://ih-crud-api.herokuapp.com/characters")
    .then(responseFromAPI => {
        // console.log(responseFromAPI)
        res.render("characters/list-characters", { characters: responseFromAPI.data });
    })
    .catch(err => console.error(err))
});

router.get('/characters/create', (req, res, next) => {
    res.render('characters/create-character.hbs')
});



router.get("/characters/:id", (req, res, next) => {
    axios.get(`https://ih-crud-api.herokuapp.com/characters/${req.params.id}`)
    .then(responseFromAPI => {
        // console.log("details: ", responseFromAPI.data)
        res.render("characters/details-character", { character: responseFromAPI.data });
    })
    .catch(err => console.error(err))
});

router.get('/characters/:id/edit', (req, res, next) => {
    axios.get(`https://ih-crud-api.herokuapp.com/characters/${req.params.id}`)
    .then(responseFromAPI => {
        res.render('characters/edit-character.hbs', { character: responseFromAPI.data })
    })
    .catch(err => console.log(err))
});

router.post('/characters/create', (req, res, next) => {

    const createCharacter = { 
        name: req.body.name,
        occupation: req.body.occupation,
        weapon: req.body.weapon,
        debt: req.body.debt
 };

    axios.post('https://ih-crud-api.herokuapp.com/characters', createCharacter)
    .then(responseFromAPI => {
        Character.create({responseFromAPI})
        res.redirect('/characters')
    })
    .catch(err => console.log(err));
})

router.post('/characters/:id/update', (req, res, next) => {

    const createCharacter = { 
        name: req.body.name,
        occupation: req.body.occupation,
        weapon: req.body.weapon,
        debt: req.body.debt
 };

    axios.put(`https://ih-crud-api.herokuapp.com/characters/${req.params.id}`, createCharacter)
    .then(responseFromAPI => {

        res.redirect(`/characters/${req.params.id}`)
    })
    .catch(err => console.log(err));
});

router.post('/characters/:id/delete', (req, res, next) => {
    axios.delete(`https://ih-crud-api.herokuapp.com/characters/${req.params.id}`)
    .then(responseFromAPI => {
        res.redirect('/characters')
    })
    .catch(err => console.log(err));
});


module.exports = router;


// https://ih-crud-api.herokuapp.com/characters