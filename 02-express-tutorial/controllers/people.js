const express = require("express");
const { people } = require('../data');
// const router = express.Router();

const addPerson = (req, res) => { 
    const { name } = req.body;
    if (!name) {
        return res
        .status(400)
        .json({ success: false, msg: 'Please provide a name'});
    }
    people.push({ id: people.length + 1, name: req.body.name });
    res.status(201).send({ success: true, person: name });
};

const getPeople = (req, res) => {
    res.status(200).json({ success: true, data: people});
}

const findPerson = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    const person = people.find((person) => person.id === Number(id));
    if (!person) {
        return res
        .status(404)
        .json({ success: false, msg: `ID: ${id} not found`})
    }
    res.status(200).json({ success: true, data: person});
};

const updatePerson = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    const person = people.find((person) => person.id === Number(id));

    if(!person) {
        return res
        .status(404)
        .json({ success: false, msg: `ID: ${id} not found`})
    }
    res.status(200).json({ success: true, data: people});
};


const deletePerson = (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id));

    if(!person) {
        return res
        .status(404)
        .json({ success: false, msg: `ID: ${req.params.id} not found`})
    }
    const newPeople = people.filter((person) => person.id !== Number(req.params.id));
    return res.status(200).json({ success: true, data: newPeople});
};

module.exports = { addPerson, getPeople, findPerson, updatePerson, deletePerson };