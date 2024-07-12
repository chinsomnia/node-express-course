const express = require("express");
const router = express.Router();
const { addPerson, getPeople, findPerson, updatePerson, deletePerson } = require("../controllers/people.js");
const { people } = require('../data');

router.get('/', getPeople);
router.post('/', addPerson);  
router.get('/:id', findPerson);
router.put('/:id', updatePerson);
router.delete('/:id', deletePerson);

module.exports = router;